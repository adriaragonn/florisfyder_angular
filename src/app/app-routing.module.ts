import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { OptionsComponent } from './components/order/options/options.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/order/products/products.component';
import { QuantitiesComponent } from './components/order/quantities/quantities.component';
import { ResumeComponent } from './components/order/resume/resume.component';
import { WorksComponent } from './components/order/works/works.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'pedidos',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
