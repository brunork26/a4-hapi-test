import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JudgeComponent } from './judge/judge.component';
import { NarratorComponent } from './narrator/narrator.component';


@NgModule({
  declarations: [
    AppComponent,
    JudgeComponent,
    NarratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
