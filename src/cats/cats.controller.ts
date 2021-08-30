import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
import { ReadOnlyCatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '현재 캣' })
  @Get()
  getCurrentCat() {
    return 'current cat';
  }
  @ApiResponse({ status: 200, description: 'Success', type: ReadOnlyCatDto })
  @ApiResponse({ status: 500, description: 'Server Error..' })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signup(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn() {
    return 'login';
  }
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {
    return 'logout';
  }
  @ApiOperation({ summary: '캣 이미지 업로드' })
  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
