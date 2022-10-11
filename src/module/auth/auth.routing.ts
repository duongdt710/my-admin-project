import {ModuleWithProviders, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login/login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: '/login', component: LoginComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export  class AppRoutingModule {}

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)
