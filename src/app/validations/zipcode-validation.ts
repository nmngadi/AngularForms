import { AbstractControl, ValidatorFn } from '@angular/forms';

export function zipCode(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null;
    }
    const isValid = /^[0-9]{4}$/.test(control.value);

    return isValid ? null : { zipCode: true };
  };
}
