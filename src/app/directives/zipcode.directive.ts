import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { zipCode } from '../validations/zipcode-validation';

@Directive({
  selector: '[appZipcode]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ZipCodeDirective, multi: true }
  ]
})
export class ZipCodeDirective implements Validator {
  validateZipCode: ValidatorFn;
  constructor() {
    this.validateZipCode = zipCode();
  }

  validate(control: AbstractControl): ValidationErrors|null {
    return this.validateZipCode(control);
  }
}
