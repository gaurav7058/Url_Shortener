import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema({ timestamps: true })
export class Url {
  @Prop({ required: true })
  originalUrl: string;

  @Prop({ unique: true, required: true })
  shortCode: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ default: 0 })
  clicks: number;
}

export const UrlSchema = SchemaFactory.createForClass(Url);