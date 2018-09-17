import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'node_modules/ngx-cookie-service'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LinijaMedjugradskaService } from './service/linija-medjugradska.service';
import { LinjaMedjugradskaListComponent } from './home/linja-medjugradska-list/linja-medjugradska-list.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { httpInterceptorProviders } from './http-interceptors/provider';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { MedjugradskaAdminComponent } from './medjugradska-admin/medjugradska-admin.component';
import { VozacFormaComponent } from './vozac-forma/vozac-forma.component';
import { AutobusFormaComponent } from './autobus-forma/autobus-forma.component';
import { LinijaFormaComponent } from './linija-forma/linija-forma.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LinjaMedjugradskaListComponent,
    NavigationComponent,
    RegistrationComponent,
    AdminComponent,
    MedjugradskaAdminComponent,
    VozacFormaComponent,
    AutobusFormaComponent,
    LinijaFormaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LinijaMedjugradskaService,
    CookieService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
