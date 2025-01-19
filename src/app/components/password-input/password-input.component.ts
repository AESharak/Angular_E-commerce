import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="input-group">
      <input
        [type]="showPassword ? 'text' : 'password'"
        class="form-control"
        [formControl]="control"
        [class.is-invalid]="control.invalid && control.touched"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="showPassword = !showPassword"
      >
        <i
          class="bi"
          [class.bi-eye]="!showPassword"
          [class.bi-eye-slash]="showPassword"
        ></i>
      </button>
    </div>
  `,
})
export class PasswordInputComponent {
  @Input({ required: true }) control!: FormControl<string | null>;
  showPassword = false;
}
