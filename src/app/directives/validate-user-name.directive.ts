import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {  CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appAppValidateUserName]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateUserNameDirective), multi: true }]
})
export class ValidateUserNameDirective implements Validators {

  constructor(
    public customValidator: CustomvalidationService
  ) { }
  validate(control: AbstractControl): Promise<unknown> {
    return this.customValidator.userNameValidator(control);
  }
}
