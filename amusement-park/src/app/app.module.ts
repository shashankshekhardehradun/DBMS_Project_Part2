import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { RidesComponent } from './components/rides/rides.component';
import { ShowsComponent } from './components/shows/shows.component';
import { DiningComponent } from './components/dining/dining.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RidesComponent,
    ShowsComponent,
    DiningComponent,
    ShoppingComponent,
    BookingComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // insert API end point and replace the fake backend to store user registration data in database
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
