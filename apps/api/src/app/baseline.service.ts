import { Injectable } from '@nestjs/common';
import { Baseline } from './types/baseline';
import { BaselineDto, BaselineSaveDto } from '@workshop/api-interfaces';
import { randomUUID } from 'crypto';

@Injectable()
export class BaselineService {
  private baselines: Baseline[] = [
    {
      id: '987e62c2-13a1-49fc-a1c1-5939407a53cb',
      actualPartNumber: 'BL101',
      targetPartNumber: 'BL102',
      createdAt: new Date(2022, 2, 5, 10, 20, 35),
    },
  ];

  getAll(): BaselineDto[] {
    return this.baselines.map((baseline) => ({
      ...baseline,
      createdAt: baseline.createdAt.toISOString(),
    }));
  }

  create(baseline: BaselineSaveDto): BaselineDto {
    const baselineToSave: Baseline = {
      ...baseline,
      id: randomUUID(),
      createdAt: new Date(),
    };

    this.baselines.push(baselineToSave);

    return {
      ...baselineToSave,
      createdAt: baselineToSave.createdAt.toISOString(),
    };
  }

  delete(id: string): BaselineDto {
    const baseline = this.baselines.find((b) => b.id === id);
    this.baselines = this.baselines.filter((b) => b.id !== id);
    return {
      ...baseline,
      createdAt: baseline.createdAt.toISOString(),
    };
  }
}
