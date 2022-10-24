import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
=======
import { CardComponent } from './card/card.component';
import { UploaderComponent } from './uploader/uploader.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UploaderComponent,
 
  ],
  imports: [
    BrowserModule,
  
>>>>>>> dd0960815f52487d06b15ca49388e497d272a308
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
