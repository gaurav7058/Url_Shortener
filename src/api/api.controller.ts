import { Controller, Post, Get, Param, UseGuards, Body, HttpCode, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { ApiService } from './api.service';
import { ShortenUrlRequestDto } from './dto/shorten-url-request.dto';
import { ShortenUrlResponseDto } from './dto/shorten-url-response.dto';
import { ShortenUrlStatResponseDto } from './dto/shorten-url-stat-response.dto';

@ApiTags()
@ApiBearerAuth('jwt-auth') // <-- same name used in main.ts
@Controller()
export class ApiController {

  constructor(private readonly apiService: ApiService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @Post('api/shorten')
  @HttpCode(201)
  @ApiOkResponse({ description: 'Shortened URL created successfully', type: ShortenUrlResponseDto })
  async shorten(@Req() request: Request, @Body() dto: ShortenUrlRequestDto) {
    const url = await this.apiService.createShortUrl(dto);
    return new ShortenUrlResponseDto(url.originalUrl,
       `${request.protocol}://${request.get('host')}/r/${url.shortCode}`);
  }
  
  @Get('r/:shortCode')
  @HttpCode(302)
  async redirect(@Param('shortCode') code: string, @Res() res: Response) {
    const originalUrl = await this.apiService.redirect(code);
    return res.redirect(originalUrl);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('api/stats/:shortCode')
  @HttpCode(200)
  @ApiOkResponse({ description: 'URL statistics retrieved successfully', type: ShortenUrlStatResponseDto })
  async stats(@Req() request: Request, @Param('shortCode') code: string) {
    const url = await this.apiService.getStats(code);
    return new ShortenUrlStatResponseDto(
        url.originalUrl,
       `${request.protocol}://${request.get('host')}/r/${url.shortCode}`,
       url.clicks);
  }
}
