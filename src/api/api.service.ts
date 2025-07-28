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

  async redirect(shortCode: string): Promise<string> {
    const urlDoc = await this.urlModel.findOne({ shortCode });

    if (!urlDoc) throw new NotFoundException('Short URL not found');

    urlDoc.clicks += 1;
    await urlDoc.save();

    return urlDoc.originalUrl;
  }

  async getStats(shortCode: string): Promise<Url> {
    const urlDoc = await this.urlModel.findOne({ shortCode });
    if (!urlDoc) throw new NotFoundException('Short URL not found');
    return urlDoc;
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
