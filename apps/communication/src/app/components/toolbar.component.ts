import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'wsp-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <span>Communication</span>
      <span class="ml-auto text-sm">
        Available mappings: {{ numberOfMappings }}
      </span>
      <button mat-icon-button class="!ml-2" (click)="toggleMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [],
})
export class ToolbarComponent {
  @Output()
  readonly toggleMenu = new EventEmitter<void>();

  numberOfMappings = 2;
}
