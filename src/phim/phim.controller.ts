import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Phim } from './phim.entity';
import { PhimService } from './phim.service';

@Controller('phim')
export class PhimController {

  constructor(private readonly phimService: PhimService){}

  @Get()
  getHello(): Promise<Phim[]>{
    return this.phimService.findAll();
  }

  @Get(':id')
  getPhim(@Param() params): Promise<Phim>{
    return this.phimService.findOne(params.id);
  }

  @Post()
  create(@Body() Phim: Phim) {
    return this.phimService.create(Phim);
  }

  @Put()
  update(@Body() phim: Phim) {
    return this.phimService.update(phim);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.phimService.delete(params.id);
  }


}
