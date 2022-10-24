import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComprimentoPipe } from './comprimento.pipe';
import { StringCpfPipe } from './string-cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComprimentoPipe,
    StringCpfPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
