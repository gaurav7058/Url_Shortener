import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url, UrlDocument } from '../schemas/url.schema';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { ShortenUrlRequestDto } from './dto/shorten-url-request.dto';


@Injectable()
export class ApiService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async createShortUrl(dto: ShortenUrlRequestDto): Promise<Url> {
    try{
      const code = dto.customCode == "" || dto.customCode == undefined ? await this.generateUniqueCode(): dto.customCode;
    
      const existing = await this.urlModel.findOne({ shortCode: code });

      if (existing) {
        throw new BadRequestException('Short code already in use');
      }

      const created = new this.urlModel({
        originalUrl: dto.url,
        shortCode: code,
        createdAt: new Date()
      });

      return created.save();
    }
    catch (error) {
      // Handle known exceptions or rethrow as InternalServerError
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Database error: ' + error.message);
    }
  }

  async redirect(shortCode: string): Promise<string> {
    try {
      const urlDoc = await this.urlModel.findOne({ shortCode });

      if (!urlDoc) throw new NotFoundException('Short URL not found');

      urlDoc.clicks += 1;
      await urlDoc.save();

      return urlDoc.originalUrl;
    } catch (error) {
      // Handle known exceptions or rethrow as InternalServerError
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Database error: ' + error.message);
    }
  }

  async getStats(shortCode: string): Promise<Url> {
    try {

      const urlDoc = await this.urlModel.findOne({ shortCode });
      if (!urlDoc) throw new NotFoundException('Short URL not found');
      return urlDoc;

    } catch (error) {
      // Handle known exceptions or rethrow as InternalServerError
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Database error: ' + error.message);
    }
  }

  private async generateUniqueCode(): Promise<string> {
    let code: string;
    let exists: Url | null;

    do {
      code = nanoid(6);
      exists = await this.urlModel.findOne({ shortCode: code });
    } while (exists);

    return code;
  }
}
