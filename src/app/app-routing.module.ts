import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OptionsComponent } from './components/order/options/options.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/order/products/products.component';
import { WorksComponent } from './components/order/works/works.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'nuevo-pedido',
    component: OrderComponent,
    children: [
      {
        path: '',
        outlet: 'works',
        component: WorksComponent
      },
      {
        path: 'options/:id',
        outlet:'works',
        component: OptionsComponent
      },
      {
        path: 'products/:id',
        outlet: 'works',
        component: ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
