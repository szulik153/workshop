import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BaselineDto,
  BaselineSaveDto,
  EcuDto,
  EcuSaveDto,
} from '@workshop/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Baseline } from '../types/baseline';

@Injectable({ providedIn: 'root' })
export class MappingService {
  private baseEcuUrl = 'api/ecu';
  private baseBaselineUrl = 'api/baseline';

  private endpoints = {
    getBaselines: this.baseBaselineUrl,
    addBaseline: this.baseBaselineUrl,
    removeBaseline: (id: string) => `${this.baseBaselineUrl}/${id}`,
    getEcus: this.baseEcuUrl,
    addEcu: this.baseEcuUrl,
    removeEcu: (id: string) => `${this.baseEcuUrl}/${id}`,
  };

  constructor(private http: HttpClient) {}

  getAllBaselines(): Observable<Baseline[]> {
    return this.http.get<BaselineDto[]>(this.endpoints.getBaselines).pipe(
      map((baselines) =>
        baselines.map((baseline) => ({
          id: baseline.id,
          actualPartNumber: baseline.actualPartNumber,
          targetPartNumber: baseline.targetPartNumber,
          createdAt: new Date(baseline.createdAt),
        }))
      )
    );
  }

  addBaseline(baseline: BaselineSaveDto): Observable<BaselineDto> {
    return this.http.post<BaselineDto>(this.endpoints.addBaseline, baseline);
  }

  removeBaseline(id: string): Observable<void> {
    return this.http.delete<void>(this.endpoints.removeBaseline(id));
  }

  getAllEcus(): Observable<EcuDto[]> {
    return this.http.get<EcuDto[]>(this.endpoints.getEcus);
  }

  addEcu(baseline: EcuSaveDto): Observable<EcuDto> {
    return this.http.post<EcuDto>(this.endpoints.addEcu, baseline);
  }

  removeEcu(id: string): Observable<void> {
    return this.http.delete<void>(this.endpoints.removeEcu(id));
  }
}
