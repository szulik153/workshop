import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselineSaveDto } from '@workshop/api-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'wsp-create-baseline',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  template: `
    <form
      class="flex flex-col gap-2 m-4 max-w-lg"
      (ngSubmit)="onSubmit()"
      #form="ngForm"
    >
      <mat-form-field appearance="outline">
        <mat-label>Actual part number</mat-label>
        <input
          matInput
          required
          name="actualPartNumber"
          [(ngModel)]="baselineToSave.actualPartNumber"
        />
        <mat-error>Field is required</mat-error>
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Target part number</mat-label>
        <input
          matInput
          required
          name="targetPartNumber"
          [(ngModel)]="baselineToSave.targetPartNumber"
        />
        <mat-error>Field is required</mat-error>
      </mat-form-field>

      <div class="flex flex-row items-center justify-end gap-2">
        <button mat-flat-button color="warn" type="reset">Reset</button>
        <button
          mat-flat-button
          color="primary"
          type="submit"
          [disabled]="form.invalid"
        >
          Save
        </button>
      </div>
    </form>
  `,
  styles: [],
})
export class CreateBaselineComponent {
  @Output()
  readonly addMapping = new EventEmitter<BaselineSaveDto>();

  baselineToSave: BaselineSaveDto = {
    actualPartNumber: '',
    targetPartNumber: '',
  };

  onSubmit() {
    console.log(this.baselineToSave);
    this.addMapping.emit({ ...this.baselineToSave });
  }
}
