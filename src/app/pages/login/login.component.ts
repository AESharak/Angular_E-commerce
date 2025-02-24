import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading = false;
  submitted = false;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  loginData = {
    email: '',
    password: '',
  };

  validatePassword(password: string): string[] {
    const errors: string[] = [];
    if (password.length < 8) errors.push('At least 8 characters');
    if (!/[a-z]/.test(password)) errors.push('One lowercase letter');
    if (!/[A-Z]/.test(password)) errors.push('One uppercase letter');
    if (!/[0-9]/.test(password)) errors.push('One number');
    if (!/[@$!%*?&]/.test(password)) errors.push('One special character');
    return errors;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (
      form.valid &&
      this.validatePassword(this.loginData.password).length === 0
    ) {
      this.isLoading = true;
      console.log('Form submitted:', this.loginData);
    }
  }
}
