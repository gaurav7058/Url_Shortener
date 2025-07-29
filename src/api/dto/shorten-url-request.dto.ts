import { IsOptional, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ShortenUrlRequestDto {
  @ApiProperty({ example: 'https://www.example.com/a-very-long-url-to-shorten' })
  @IsUrl()
  url: string;

  @ApiProperty({ example: 'my-custom-code' })
  @IsString()
  @IsOptional()
  customCode: string;
}