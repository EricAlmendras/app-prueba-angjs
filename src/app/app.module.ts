import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimercomponentComponent } from './primercomponent/primercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
