import { AbstractControl, ValidatorFn } from '@angular/forms';

export function zipCode(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null;
    }
    const regec = new RegExp('^[0-9]{4}$');
    const isValid = regec.test(control.value);

    return isValid ? null : { zipCode: true };
  };
}
