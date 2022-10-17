import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "./helpers/auth.guard";
import {LoginComponent} from "../module/login/login/login.component";
import {ModuleWithProviders} from "@angular/core";
// import {AppPreloadingStrategy} from "./app-preloading.strategy";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {preload: true},
    canActivate: []
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {preload: true},
    canActivate: []
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

