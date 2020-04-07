import { AbstractControl, ValidatorFn } from '@angular/forms';

export function localPhoneNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null;
    }
    const regec = new RegExp('(^0[78][2347][0-9]{7})');
    const isValid = regec.test(control.value);

    return isValid ? null : { localPhoneNumber: true };
  };
}
