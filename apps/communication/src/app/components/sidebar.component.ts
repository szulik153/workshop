import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselineDetailsComponent } from './baseline-details.component';
import { EcuDetailsComponent } from './ecu-details.component';
import { CommunicationService } from '../services/communication.service';
import { MappingService } from '../services/mapping.service';
import { Baseline } from '../types/baseline';
import { switchMap } from 'rxjs';

@Component({
  selector: 'wsp-sidebar',
  standalone: true,
  imports: [CommonModule, BaselineDetailsComponent, EcuDetailsComponent],
  template: `
    <p>List of mappings:</p>
    <div class="flex flex-col gap-2">
      <wsp-baseline-details
        *ngFor="let baseline of baselines"
        [baseline]="baseline"
        (delete)="onDeleteBaseline($event)"
      ></wsp-baseline-details>
      <wsp-ecu-details></wsp-ecu-details>
    </div>
  `,
  styles: [
    `
      :host {
        @apply block m-2;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  baselines: Baseline[] = [];

  constructor(
    private communicationService: CommunicationService,
    private mappingsService: MappingService
  ) {}

  ngOnInit(): void {
    this.mappingsService
      .getAllBaselines()
      .subscribe((baselines) => (this.baselines = baselines));

    this.communicationService.baselinesChanged$
      .pipe(switchMap(() => this.mappingsService.getAllBaselines()))
      .subscribe((baselines) => (this.baselines = baselines));
  }

  onDeleteBaseline(id: string): void {
    this.mappingsService
      .removeBaseline(id)
      .subscribe(() => this.communicationService.baselinesChanged());
  }
}
