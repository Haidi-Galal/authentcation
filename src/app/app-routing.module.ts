import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"signup",loadComponent:()=>import('./components/signup/signup.component').then((m)=>m.SignupComponent),title:'signup'}
  ,
  {path:"signin",loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'sigin'}
   ,
   {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'**',redirectTo:'signup',pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
