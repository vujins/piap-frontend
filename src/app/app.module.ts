import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'node_modules/ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ShareModule } from './share/share.module';
import { PrevoznikFormaComponent } from './prevoznik-forma/prevoznik-forma.component';
import { GradskaAdminComponent } from './gradska-admin/gradska-admin.component';
import { KarteAdminComponent } from './karte-admin/karte-admin.component';
import { GradskaFormaComponent } from './gradska-admin/gradska-forma/gradska-forma.component';
import { LinijaGradskaListComponent } from './home/linija-gradska-list/linija-gradska-list.component';
import { KarteComponent } from './karte/karte.component';
import { MesecnaComponent } from './mesecna/mesecna.component';
import { MesecnaAdminComponent } from './mesecna-admin/mesecna-admin.component';

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
    LinijaFormaComponent,
    PrevoznikFormaComponent,
    GradskaAdminComponent,
    KarteAdminComponent,
    GradskaFormaComponent,
    LinijaGradskaListComponent,
    KarteComponent,
    MesecnaComponent,
    MesecnaAdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [
    LinijaMedjugradskaService,
    CookieService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
