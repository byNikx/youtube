import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';


import {
  MdButtonModule, MdCheckboxModule,
  MdSidenavModule, MdToolbarModule,
  MdIconModule, MdGridListModule
} from '@angular/material';
const MD_COMPONENTS = [
    MdButtonModule, MdCheckboxModule,
    MdSidenavModule, MdToolbarModule,
    MdIconModule, MdGridListModule
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule
  ].concat(MD_COMPONENTS),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
