import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private baselinesChangedSubject = new ReplaySubject<void>();

  baselinesChanged$ = this.baselinesChangedSubject.asObservable();

  baselinesChanged(): void {
    this.baselinesChangedSubject.next();
  }
}
