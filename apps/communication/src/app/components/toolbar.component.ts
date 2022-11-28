import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommunicationService } from '../services/communication.service';
import { switchMap } from 'rxjs/operators';
import { MappingService } from '../services/mapping.service';

@Component({
  selector: 'wsp-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <span>Communication</span>
      <span class="ml-auto text-sm">
        Available mappings: {{ numberOfBaselines + numberOfEcus }}
      </span>
      <button mat-icon-button class="!ml-2" (click)="toggleMenu.emit()">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [],
})
export class ToolbarComponent implements OnInit {
  @Output()
  readonly toggleMenu = new EventEmitter<void>();

  numberOfBaselines = 0;
  numberOfEcus = 0;

  constructor(
    private communicationService: CommunicationService,
    private mappingService: MappingService
  ) {}

  ngOnInit(): void {
    this.mappingService
      .getAllBaselines()
      .subscribe((baselines) => (this.numberOfBaselines = baselines.length));

    this.communicationService.baselinesChanged$
      .pipe(switchMap(() => this.mappingService.getAllBaselines()))
      .subscribe((baselines) => (this.numberOfBaselines = baselines.length));
  }
}
