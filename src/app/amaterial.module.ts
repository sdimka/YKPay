import { NgModule } from '@angular/core';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatNativeDateModule} from '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatRippleModule} from '@angular/material/core';

import {MatInputModule} from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatChipsModule} from '@angular/material/chips';

import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  exports: [
    BrowserAnimationsModule,

    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatRippleModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatRadioModule

  ]
})
export class AmaterialModule { }