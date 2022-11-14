import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { EcuService } from './ecu.service';
import { EcuDto, EcuSaveDto } from '@workshop/api-interfaces';

@Controller('ecu')
export class EcuController {
  constructor(private readonly ecuService: EcuService) {}

  @Get()
  getAll(): EcuDto[] {
    return this.ecuService.getAll();
  }

  @Post()
  add(@Body() ecu: EcuSaveDto): EcuDto {
    return this.ecuService.create(ecu);
  }

  @Delete(':id')
  delete(@Param('id') id: string): EcuDto {
    return this.ecuService.delete(id);
  }
}
