import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app.routing';
import { routing } from './app.routing';
import { DetailsModule } from './details/details.module';
import { BooksService } from './services/books.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './guards/canActivateGuard';
import { ResolveGuard } from './guards/resolveGuard';
import { CanDeactivateChildGuard } from './guards/canDeactivateChildGuard';
import { CanActivateChildGuard } from './guards/canActivateChildGuard';
@NgModule({
  imports: [BrowserModule, FormsModule, routing, DetailsModule],
  declarations: [AppComponent, DashboardComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [ BooksService, ResolveGuard, CanActivateChildGuard ]
})
export class AppModule { }
