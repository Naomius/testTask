import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordRepeatDirective } from './directives/password-repeat.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';

@NgModule({
  declarations: [
    PasswordRepeatDirective,
    AutoFocusDirective,
  ],
  imports: [

    CommonModule,
  ],
  exports: [
    PasswordRepeatDirective,
    AutoFocusDirective
  ]
})
export class SharedModule { }
