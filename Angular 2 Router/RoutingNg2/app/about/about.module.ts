import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { aboutRouting } from './about.routing';
@NgModule({
  imports: [aboutRouting],
  declarations: [AboutComponent]
})
export class AboutModule { }