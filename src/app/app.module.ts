import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { QuantitiesComponent } from './components/order/quantities/quantities.component';
import { ResumeComponent } from './components/order/resume/resume.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/home/all/all.component';
import { Card1Component } from './components/home/all/card1/card1.component';
import { Card2Component } from './components/home/all/card2/card2.component';
import { Card3Component } from './components/home/all/card3/card3.component';
import { ChartsComponent } from './components/home/all/charts/charts.component';
import { OrderlistComponent } from './components/home/all/orderlist/orderlist.component';

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
    OptionsComponent,
    QuantitiesComponent,
    ResumeComponent,
    HomeComponent,
    AllComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    ChartsComponent,
    OrderlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
