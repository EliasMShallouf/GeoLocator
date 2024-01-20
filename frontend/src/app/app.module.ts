import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { ResultsComponent } from './results/results.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AddressService } from './services/address.service';

@NgModule({
  exports: [
    AppComponent,
    AddressComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponent,
    AddressComponent,
    ResultsComponent
  ],
  providers: [
    provideRouter(routes),
    AddressService
  ]
})
export class AppModule { }