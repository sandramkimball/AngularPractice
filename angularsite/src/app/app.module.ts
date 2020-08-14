import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheeseComponent } from './cheese/cheese.component';
import { MeatsComponent } from './meats/meats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheeseComponent,
    MeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
