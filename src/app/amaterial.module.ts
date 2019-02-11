import { NgModule } from '@angular/core';
import {
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule, MatProgressBarModule} from '@angular/material';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatRippleModule} from '@angular/material/core';

import {MatInputModule} from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  exports: [
    BrowserAnimationsModule,

    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatRippleModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule

  ]
})
export class AmaterialModule { }