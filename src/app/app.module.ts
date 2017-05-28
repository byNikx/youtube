import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routing';

import 'hammerjs';

import {
  LocationStrategy, 
  HashLocationStrategy,
  PathLocationStrategy //HTML 5,default
} from "@angular/common";


import {
  MdButtonModule, MdCheckboxModule,
  MdSidenavModule, MdToolbarModule,
  MdIconModule, MdGridListModule,
  MdListModule, MdMenuModule,
  MdProgressBarModule
} from '@angular/material';
const MD_COMPONENTS = [
    MdButtonModule, MdCheckboxModule,
    MdSidenavModule, MdToolbarModule,
    MdIconModule, MdGridListModule,
    MdListModule, MdMenuModule,
    MdProgressBarModule
];

import { AppComponent } from './app.component';
import { TruncateDirective } from './directives/truncate/truncate.directive';
import { VideoCategoryListComponent } from './components/video/video-category-list/video-category-list.component';
import { VideoCategoryTileComponent } from './components/video/video-category-tile/video-category-tile.component';
import { PlayerComponent } from './components/player/player.component';
import { HomeComponent } from './components/home/home.component';
import { WatchComponent } from './components/video/watch/watch.component';
import { PaperComponent } from './components/paper/paper.component';
import { VideoSuggestionListComponent } from './components/video/video-suggestion-list/video-suggestion-list.component';
import { VideoSuggestionTileComponent } from './components/video/video-suggestion-tile/video-suggestion-tile.component';
import { LikeBarComponent } from './components/video/like-bar/like-bar.component';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncateDirective,
    VideoCategoryListComponent,
    VideoCategoryTileComponent,
    PlayerComponent,
    WatchComponent,
    PaperComponent,
    VideoSuggestionListComponent,
    VideoSuggestionTileComponent,
    LikeBarComponent,
    HomeComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTING
  ].concat(MD_COMPONENTS),
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
