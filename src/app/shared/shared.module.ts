import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordRepeatDirective } from './directives/password-repeat.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { FilterComponent } from './components/filter/filter.component';
import {FormsModule} from "@angular/forms";
import { Page404Component } from './components/page404/page404.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    PasswordRepeatDirective,
    AutoFocusDirective,
    FilterComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  exports: [
    PasswordRepeatDirective,
    AutoFocusDirective,
    FilterComponent,
    Page404Component
  ]
})
export class SharedModule { }
