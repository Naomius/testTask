import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {HeaderComponent} from "./shared/components/header/header.component";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    SharedModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
