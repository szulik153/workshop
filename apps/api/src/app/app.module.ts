import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaselineController } from './baseline.controller';
import { BaselineService } from './baseline.service';
import { EcuService } from './ecu.service';
import { EcuController } from './ecu.controller';

@Module({
  imports: [],
  controllers: [AppController, BaselineController, EcuController],
  providers: [AppService, BaselineService, EcuService],
})
export class AppModule {}
