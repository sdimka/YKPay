import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { YkpayComponent } from './ykpay/ykpay.component';
import { YKPService } from './ykpay/ykpay.service';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AmaterialModule } from './amaterial.module';

import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [
    AppComponent, YkpayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    BrowserAnimationsModule,

    AmaterialModule,

    FlexLayoutModule

  ],
  providers: [YKPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
