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
  MdIconModule, MdGridListModule,
  MdListModule, MdMenuModule
} from '@angular/material';
const MD_COMPONENTS = [
    MdButtonModule, MdCheckboxModule,
    MdSidenavModule, MdToolbarModule,
    MdIconModule, MdGridListModule,
    MdListModule, MdMenuModule
];

import { AppComponent } from './app.component';
import { TruncateDirective } from './directives/truncate/truncate.directive';
import { VideoCategoryListComponent } from './components/video/video-category-list/video-category-list.component';
import { VideoCategoryTileComponent } from './components/video/video-category-tile/video-category-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncateDirective,
    VideoCategoryListComponent,
    VideoCategoryTileComponent
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
