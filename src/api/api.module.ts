import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { Url, UrlSchema } from '../schemas/url.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [ApiController],
  providers: [ApiService],
  exports: [ApiService]
})
export class ApiModule {}