import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderComponent } from './components/order/order.component';
import { ClientComponent } from './components/order/client/client.component';
import { DaysComponent } from './components/order/days/days.component';
import { CartComponent } from './components/order/cart/cart.component';
import { WorksComponent } from './components/order/works/works.component';
import { ProductsComponent } from './components/order/products/products.component';
import { OptionsComponent } from './components/order/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    OrderComponent,
    ClientComponent,
    DaysComponent,
    CartComponent,
    WorksComponent,
    ProductsComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
