import { Controller, Post, Get, Param, UseGuards, Body, HttpCode, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ShortenDto } from './api.shortenDto';
import { Response, Request } from 'express';
import { Throttle } from '@nestjs/throttler';
import { ApiService } from './api.service';

@ApiTags()
@ApiBearerAuth('jwt-auth') // <-- same name used in main.ts
@Controller()
export class ApiController {

  constructor(private readonly apiService: ApiService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @Post('api/shorten')
  async shorten(@Req() request: Request, @Body() dto: ShortenDto) {
    const url = await this.apiService.createShortUrl(dto);
    return {
      originalUrl: url.originalUrl,
      shortUrl: `${request.protocol}://${request.get('host')}/r/${url.shortCode}`,
    };
  }
  
  @Get('r/:shortCode')
  @HttpCode(302)
  async redirect(@Param('shortCode') code: string, @Res() res: Response) {
    const originalUrl = await this.apiService.redirect(code);
    return res.redirect(originalUrl);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('api/stats/:shortCode')
  async stats(@Req() request: Request, @Param('shortCode') code: string) {
    const url = await this.apiService.getStats(code);
    return {
      originalUrl: url.originalUrl,
      shortUrl: `${request.protocol}://${request.get('host')}/r/${url.shortCode}`,
      clicks: url.clicks,
    };
  }
}
