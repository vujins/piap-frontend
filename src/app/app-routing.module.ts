import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { MedjugradskaAdminComponent } from './medjugradska-admin/medjugradska-admin.component';
import { StepperComponent } from './stepper/stepper.component';
import { GradskaAdminComponent } from './gradska-admin/gradska-admin.component';
import { KarteAdminComponent } from './karte-admin/karte-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' } //cim otvorim aplikaciju redirektuje me na home
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'medjugradska-admin', component: MedjugradskaAdminComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'gradska-admin', component: GradskaAdminComponent },
  { path: 'karte-admin', component: KarteAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
