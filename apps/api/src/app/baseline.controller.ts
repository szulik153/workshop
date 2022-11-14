import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { BaselineDto, BaselineSaveDto } from '@workshop/api-interfaces';
import { BaselineService } from './baseline.service';

@Controller('baseline')
export class BaselineController {
  constructor(private readonly baselineService: BaselineService) {}

  @Get()
  getAll(): BaselineDto[] {
    return this.baselineService.getAll();
  }

  @Post()
  add(@Body() baseline: BaselineSaveDto): BaselineDto {
    return this.baselineService.create(baseline);
  }

  @Delete(':id')
  delete(@Param('id') id: string): BaselineDto {
    return this.baselineService.delete(id);
  }
}
