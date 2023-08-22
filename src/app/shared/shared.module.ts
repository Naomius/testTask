import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordRepeatDirective } from './directives/password-repeat.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { FilterComponent } from './components/filter/filter.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PasswordRepeatDirective,
    AutoFocusDirective,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PasswordRepeatDirective,
    AutoFocusDirective,
    FilterComponent
  ]
})
export class SharedModule { }
