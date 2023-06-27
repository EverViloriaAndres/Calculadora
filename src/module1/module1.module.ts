import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentPrincipal } from './Principal/module1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentPrincipal],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ComponentPrincipal],
})
export class Module1 {}
