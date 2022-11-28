import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Baseline } from '../types/baseline';
import { BaselineSaveDto } from '@workshop/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private baselineSubject = new BehaviorSubject<Baseline[]>([]);

  baselines$ = this.baselineSubject.asObservable();

  addNewBaseline(baseline: BaselineSaveDto): void {
    const baselineToAdd: Baseline = {
      id: new Date().toISOString(),
      actualPartNumber: baseline.actualPartNumber,
      targetPartNumber: baseline.targetPartNumber,
      createdAt: new Date(),
    };

    this.baselineSubject.next([...this.baselineSubject.value, baselineToAdd]);
  }

  deleteBaseline(id: string): void {
    const newBaselines = this.baselineSubject.value.filter(
      (baseline) => baseline.id !== id
    );
    this.baselineSubject.next(newBaselines);
  }
}
