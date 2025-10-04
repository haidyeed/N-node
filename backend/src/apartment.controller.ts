import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { Apartment } from './apartment.entity';

@Controller('apartments')
export class ApartmentController {
  constructor(private service: ApartmentService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() apartment: Partial<Apartment>) {
    return this.service.create(apartment);
  }
}
