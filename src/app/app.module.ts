import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlashService } from './flash.service';
import { LessonService } from './lesson.service';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FlashService,LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
