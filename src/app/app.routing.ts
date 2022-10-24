import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../module/home/home.component";
import {LoginComponent} from "../module/login/login/login.component";
import {RegisterComponent} from "../module/register/register.component";
import {AuthGuard} from "./helpers/auth.guard";
import {ForgotPassComponent} from "../module/forgot-pass/forgot-pass.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPassComponent
  },
  {path: '**', redirectTo: ''}
];

// @ts-ignore
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
export const appRoutingModule = RouterModule.forRoot(routes);

