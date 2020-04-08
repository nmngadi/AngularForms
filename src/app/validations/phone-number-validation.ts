import { AbstractControl, ValidatorFn } from '@angular/forms';

export function localPhoneNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null;
    }

    const isValid = /^\+27/.test(control.value);

    return isValid ? null : { localPhoneNumber: true };
  };
}
