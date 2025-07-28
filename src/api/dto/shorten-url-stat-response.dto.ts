import { ApiProperty } from '@nestjs/swagger';

export class ShortenUrlStatResponseDto {
  constructor(originalUrl: string, shortenedUrl: string, clicks: number) {
    this.originalUrl = originalUrl;
  }

    @ApiProperty({ example: 'https://www.example.com/a-very-long-url-to-shorten' })
    originalUrl: string;
    
    @ApiProperty({ example: 'https://short.ly/abc123' })
    shortenedUrl: string;

    @ApiProperty({ example: 42 })
    clicks: number;
}