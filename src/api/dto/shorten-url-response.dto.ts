import { ApiProperty } from "@nestjs/swagger";

export class ShortenUrlResponseDto {
  constructor(originalUrl: string, shortenedUrl: string) {
    this.originalUrl = originalUrl;
    this.shortenedUrl = shortenedUrl;
  }

  @ApiProperty({ example: 'https://www.example.com/a-very-long-url-to-shorten' })
  originalUrl: string;

  @ApiProperty({ example: 'https://short.ly/abc123' })
  shortenedUrl: string;
}