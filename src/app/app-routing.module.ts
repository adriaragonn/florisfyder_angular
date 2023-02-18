import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OptionsComponent } from './components/order/options/options.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/order/products/products.component';
import { QuantitiesComponent } from './components/order/quantities/quantities.component';
import { ResumeComponent } from './components/order/resume/resume.component';
import { WorksComponent } from './components/order/works/works.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
      },
      {
        path: 'quantities/:id',
        outlet: 'works',
        component: QuantitiesComponent
      }
    ]
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
