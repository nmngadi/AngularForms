import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ZipCodeDirective } from './directives/zipcode.directive';
import { AddressComponent } from './address/address.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ContactComponent, ZipCodeDirective, AddressComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot([
    { path: 'contact', component: ContactComponent },
    { path: 'address', component: AddressComponent },
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
