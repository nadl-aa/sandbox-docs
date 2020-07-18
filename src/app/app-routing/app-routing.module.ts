import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent} from '../bank/bank.component';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import {SbiComponent} from '../sbi/sbi.component';
import { IciciComponent} from '../icici/icici.component';
import { CanaraComponent } from '../canara/canara.component';
import { AxisComponent } from '../axis/axis.component';
import {SbilinkComponent} from '../sbilink/sbilink.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ConsentComponent } from '../consent/consent.component';
import { ViewConsentsComponent } from '../view-consents/view-consents.component';
import { ConsentDetailComponent } from '../consent-detail/consent-detail.component';
import { ConsentDetailsComponent } from '../consent-details/consent-details.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
},
  {
      path: 'banks',
      component: BankComponent
  },
  {
    path: 'sbi',
    component: SbiComponent
  },
  {
    path: 'icici',
    component: IciciComponent
  },
  {
    path: 'canara',
    component: CanaraComponent
  },
  {
    path: 'axis',
    component: AxisComponent
  },
  {
    path: 'sbilink',
    component: SbilinkComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'consent',
    component: ConsentComponent
  },
  {
    path: 'viewconsent',
    component : ViewConsentsComponent
  },
  {
    path: 'consentdetail',
    component : ConsentDetailsComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
