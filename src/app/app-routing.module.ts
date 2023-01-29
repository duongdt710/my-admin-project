import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {environment} from "../environments/environment.prod";

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    redirectTo: 'article',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: environment.production})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
