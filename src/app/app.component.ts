import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationValidator } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  emailFormGroup:  FormGroup;
  formValues: any;

  constructor(private formBuilder: FormBuilder) {

    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.passwordMatchValidator.bind(this)
    });

    this.emailFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      confirmEmail: ['', Validators.required],
    }, {
      validator: RegistrationValidator.emailMatchValidator.bind(this)
    });

    this.registrationFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      emailFormGroup: this.emailFormGroup,
      passwordFormGroup: this.passwordFormGroup
    });
   }

  onClickRegister() {
   if (this.registrationFormGroup.invalid || this.emailFormGroup.invalid || this.passwordFormGroup.invalid) {
     this.markFormGroupTouched(this.registrationFormGroup);
   }
    this.formValues = this.registrationFormGroup.value;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
