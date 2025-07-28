import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
//import { User } from '../entities/users/user.entity';

@Injectable()
export class AuthService {
    
    constructor(private jwtService: JwtService, @InjectModel(User.name) private userModel: Model<UserDocument>){}

    async register(username: string, password: string) {

    const existingUser = await this.getUser(username);
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }
    
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), username, password: hashed };
    const newUser = new this.userModel(user);
    await newUser.save();
    return { message: 'User registered' };
  }

  async validateUser(username: string, password: string) {
    const user = await this.getUser(username);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getUser(username: string) {
    return await this.userModel.findOne({ username });
  }
}
