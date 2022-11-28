import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselineDetailsComponent } from './baseline-details.component';
import { EcuDetailsComponent } from './ecu-details.component';
import { Baseline } from '../types/baseline';

@Component({
  selector: 'wsp-sidebar',
  standalone: true,
  imports: [CommonModule, BaselineDetailsComponent, EcuDetailsComponent],
  template: `
    <p>List of mappings:</p>
    <div class="flex flex-col gap-2">
      <wsp-baseline-details
        *ngFor="let baseline of baselineMappings"
        [baseline]="baseline"
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
export class SidebarComponent {
  @Input()
  baselineMappings: Baseline[] = [];
}
