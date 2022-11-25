import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MultByPipe} from "./pipe/multBy.pipe";
import {FilterPipe} from "./pipe/filter.pipe";
@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
