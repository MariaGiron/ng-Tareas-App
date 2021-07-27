import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgramacionModule } from './programacion/programacion.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgramacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
