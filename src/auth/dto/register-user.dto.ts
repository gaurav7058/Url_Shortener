import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequestDto {
  @ApiProperty({ example: 'john_doe' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsString()
  password: string;
}

export class RegisterResponseDto {

  constructor(message: string) {
    this.message = message;
  }

  @ApiProperty()
  message: string;
}