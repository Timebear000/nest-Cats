import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';
import { ReadOnlyCatDto } from './dto/cat.dto';
export type CatDocument = Cat & Document;

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat {
  @ApiProperty({
    example: 'radline000@email.com',
    description: 'email',
    required: true,
  })
  @Prop({
    required: [true, '이메일은 꼭 필수입니다.'],
    unique: [true, '이메일은 중복될 수 없습니다.'],
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'redCat',
    description: 'name',
    required: true,
  })
  @Prop({
    required: [true, '고양이 이름은 꼭 필수입니다.'],
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '541681123',
    description: 'password',
    required: true,
  })
  @Prop({
    required: [true, '패스워드는 꼭 필수입니다.'],
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;
  id: any;

  readonly readOnlyData: ReadOnlyCatDto;
}
export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
});
