import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home' , pathMatch: 'full'}


  // Set up Angular Router for multi-level navigation with lazy loading.
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  //   children: [
  //     { path: 'overview', component: OverviewComponent },
  //     { path: 'stats', component: StatsComponent }
  //   ]
  // },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  //   children: [
  //     { path: 'list', component: ProductListComponent },
  //     { path: 'details/:id', component: ProductDetailsComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
