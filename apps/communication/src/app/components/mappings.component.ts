import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBaselineComponent } from './create-baseline.component';
import { CreateEcuComponent } from './create-ecu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BaselineSaveDto } from '@workshop/api-interfaces';

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
          <wsp-create-baseline
            (addBaseline)="onNewBaseline($event)"
          ></wsp-create-baseline>
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
export class MappingsComponent {
  @Output()
  addBaseline = new EventEmitter<BaselineSaveDto>();

  onNewBaseline(newBaseline: BaselineSaveDto): void {
    this.addBaseline.emit(newBaseline);
  }
}
