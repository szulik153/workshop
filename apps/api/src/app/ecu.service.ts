import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EcuDto, EcuSaveDto } from '@workshop/api-interfaces';
import { Ecu } from './types/ecu';

@Injectable()
export class EcuService {
  private ecus: Ecu[] = [
    {
      id: '782bf6a8-9b6b-4275-9b26-09c326656bb1',
      actualEcuId: '003-HXA-001',
      targetEcuId: '003-HXA-002',
      createdAt: new Date(2021, 10, 20, 15, 20, 22),
    },
  ];

  getAll(): EcuDto[] {
    return this.ecus.map((ecu) => ({
      ...ecu,
      createdAt: ecu.createdAt.toISOString(),
    }));
  }

  create(ecu: EcuSaveDto): EcuDto {
    const ecuToSave: Ecu = {
      ...ecu,
      id: randomUUID(),
      createdAt: new Date(),
    };

    this.ecus.push(ecuToSave);

    return {
      ...ecuToSave,
      createdAt: ecuToSave.createdAt.toISOString(),
    };
  }

  delete(id: string): EcuDto {
    const ecu = this.ecus.find((b) => b.id === id);
    this.ecus = this.ecus.filter((b) => b.id !== id);
    return {
      ...ecu,
      createdAt: ecu.createdAt.toISOString(),
    };
  }
}
