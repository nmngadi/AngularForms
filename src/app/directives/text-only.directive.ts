import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { textvalidation } from '../validations/text-only-validation';

@Directive({
  selector: '[appTextOnly]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TextOnlyDirective, multi: true }
  ]
})
export class TextOnlyDirective implements Validator {

  validateTextOnly: ValidatorFn;
  constructor() {
    this.validateTextOnly = textvalidation();
  }

  validate(control: AbstractControl): ValidationErrors|null {
    return this.validateTextOnly(control);
  }

}
