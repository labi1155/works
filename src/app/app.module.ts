import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListModule } from './product-list/product-list.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
