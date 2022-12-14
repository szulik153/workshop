import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselineDetailsComponent } from './baseline-details.component';
import { EcuDetailsComponent } from './ecu-details.component';

@Component({
  selector: 'wsp-sidebar',
  standalone: true,
  imports: [CommonModule, BaselineDetailsComponent, EcuDetailsComponent],
  template: `
    <p>List of mappings:</p>
    <div class="flex flex-col gap-2">
      <wsp-baseline-details></wsp-baseline-details>
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
export class SidebarComponent {}
