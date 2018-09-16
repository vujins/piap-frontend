import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' } //cim otvorim aplikaciju redirektuje me na home
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
