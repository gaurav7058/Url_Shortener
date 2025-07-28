import { Body, Controller, HttpCode, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RegisterRequestDto } from './dto/register-user.dto';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOkResponse({ description: 'User registered successfully' })
  @HttpCode(201)
  async register(@Body() registerDto: RegisterRequestDto) {
    return this.authService.register(registerDto.username, registerDto.password);
  }

  @Post('login')
  @ApiOkResponse({ description: 'User logged in successfully', type: LoginResponseDto })
  @HttpCode(200)
  async login(@Body() loginDto: LoginRequestDto) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
