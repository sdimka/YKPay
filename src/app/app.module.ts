import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { YkpayComponent } from './ykpay/ykpay.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AmaterialModule } from './amaterial.module';


@NgModule({
  declarations: [
    AppComponent, YkpayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    MaterialModule,

    BrowserAnimationsModule,

    AmaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
