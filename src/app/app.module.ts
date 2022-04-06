import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lab06DatabindingAss1Component } from './lab06-databinding-ass1/lab06-databinding-ass1.component';
import { Lab06DatabindingAss2Component } from './lab06-databinding-ass2/lab06-databinding-ass2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab06DatabindingAss1Component,
    Lab06DatabindingAss2Component
  ],
  imports: [
    FormsModule,  // In order to use ngModel for two-way-binding
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
