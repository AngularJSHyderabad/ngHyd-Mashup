import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CountModule } from './counter/count.module';
import { SampleModule } from './sample/sample.module';
import { AppComponent } from './app.component';
import { App_Routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CountModule,
    SampleModule,
    App_Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
