import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Baseline } from '../types/baseline';

@Component({
  selector: 'wsp-baseline-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-title>Baseline</mat-card-title>
      <mat-card-subtitle>
        Created: {{ baseline.createdAt | date: 'medium' }}
      </mat-card-subtitle>
      <mat-card-content>
        <p>Actual: {{ baseline.actualPartNumber }}</p>
        <p>Target: {{ baseline.targetPartNumber }}</p>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-icon-button color="warn" (click)="onDelete()">
          <mat-icon>delete</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class BaselineDetailsComponent {
  baseline: Baseline = {
    id: '987e62c2-13a1-49fc-a1c1-5939407a53cb',
    actualPartNumber: 'BL101',
    targetPartNumber: 'BL102',
    createdAt: new Date(2022, 2, 5, 10, 20, 35),
  };

  onDelete() {
    // TODO
  }
}
