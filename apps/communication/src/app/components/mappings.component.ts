import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBaselineComponent } from './create-baseline.component';
import { CreateEcuComponent } from './create-ecu.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'wsp-mappings',
  standalone: true,
  imports: [
    CommonModule,
    CreateBaselineComponent,
    CreateEcuComponent,
    MatTabsModule,
  ],
  template: `
    <mat-tab-group>
      <mat-tab label="Baseline">
        <ng-template matTabContent>
          <wsp-create-baseline></wsp-create-baseline>
        </ng-template>
      </mat-tab>
      <mat-tab label="Ecu">
        <ng-template matTabContent>
          <wsp-create-ecu></wsp-create-ecu>
        </ng-template>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [],
})
export class MappingsComponent {}
