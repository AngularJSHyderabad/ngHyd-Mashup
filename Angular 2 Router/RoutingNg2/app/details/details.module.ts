import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { detailsRouting } from './details.routing';
//import { DetailsRoutingModule } from './details.routing';
import { DetailsComponent } from './details.component';
import { AuthorComponent } from './author.component';
import { IntroductionComponent } from './introduction.component';
@NgModule({
  imports: [BrowserModule, detailsRouting],
  declarations: [DetailsComponent, AuthorComponent, IntroductionComponent],
  exports: [DetailsComponent]
})
export class DetailsModule { }
