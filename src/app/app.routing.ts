import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../module/home/home.component";
import {LoginComponent} from "../module/login/login/login.component";
import {RegisterComponent} from "../module/register/register.component";
import {AuthGuard} from "./helpers/auth.guard";
import {ForgotPassComponent} from "../module/forgot-pass/forgot-pass.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   // canActivate: [AuthGuard]
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPassComponent
  // },
  {
    path: ':slug',
    component: RegisterComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {path: '**', redirectTo: ''}
];
// Quy tắc đặt routes: Route nào càng chi tiết thì nên được config trước những route ít chi tiết hơn. (ảnh hưởng đến việc load route)

// @ts-ignore
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
// export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// RouterModule vừa import vừa export có nghĩa là khi import AppRoutingModule vào các module khác sẽ không cần import lại RouterModule nữa vì nó đã được re-export từ ApproutingModule
export class appRoutingModule {}

