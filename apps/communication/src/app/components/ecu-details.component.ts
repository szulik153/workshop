import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Ecu } from '../types/ecu';

@Component({
  selector: 'wsp-ecu-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-title>Ecu</mat-card-title>
      <mat-card-subtitle>
        Created: {{ ecu.createdAt | date: 'medium' }}
      </mat-card-subtitle>
      <mat-card-content>
        <p>Actual: {{ ecu.actualEcuId }}</p>
        <p>Target: {{ ecu.targetEcuId }}</p>
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
export class EcuDetailsComponent {
  ecu: Ecu = {
    id: '782bf6a8-9b6b-4275-9b26-09c326656bb1',
    actualEcuId: '003-HXA-001',
    targetEcuId: '003-HXA-002',
    createdAt: new Date(2021, 10, 20, 15, 20, 22),
  };

  onDelete() {
    // TODO
  }
}
