import { FormGroup } from '@angular/forms';

export class RegistrationValidator {
    static passwordMatchValidator(passwordFormGroup: FormGroup) {
        const password = passwordFormGroup.controls.password.value;
        const repeatPassword = passwordFormGroup.controls.repeatPassword.value;

        if (repeatPassword.length <= 0) {
            return null;
        }

        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }

        return null;

    }

    static emailMatchValidator(emailFormGroup: FormGroup) {
        const email = emailFormGroup.controls.email.value;
        const confirmEmail = emailFormGroup.controls.confirmEmail.value;

        if (confirmEmail.length <= 0) {
            return null;
        }

        if (confirmEmail !== email) {
            return {
                doesMatchEmail: true
            };
        }

        return null;

    }
}
