import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import {MatButtonModule} from '@angular/material/button';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    NgMasonryGridModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
