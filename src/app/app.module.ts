import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {Router, Routes, RouterModule} from '@angular/router';
import { BankComponent} from './bank/bank.component';
import { HomeComponent } from './home/home.component';
import { SbiComponent } from './sbi/sbi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {isNumber, toInteger, padNumber} from '@ng-bootstrap/ng-bootstrap/util/util';
import { IciciComponent } from './icici/icici.component';
import { CanaraComponent } from './canara/canara.component';
import { AxisComponent } from './axis/axis.component';
import { MatFormField, MatInputModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatToolbarModule, MatMenuModule, MatCardModule} from '@angular/material';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { DatepickerModule} from 'ng-uikit';
import { SbilinkComponent } from './sbilink/sbilink.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import {ToastrModule} from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { ConsentComponent } from './consent/consent.component';
import { ConsentDetailComponent } from './consent-detail/consent-detail.component';

import {MatStepperModule} from '@angular/material/stepper';
import { ViewConsentsComponent } from './view-consents/view-consents.component';
import { ConsentDetailsComponent } from './consent-details/consent-details.component';
@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    HomeComponent,
    SbiComponent,
    IciciComponent,
    CanaraComponent,
    AxisComponent,
    SbilinkComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    ConsentComponent,
    ConsentDetailComponent,
    ViewConsentsComponent,
    ConsentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatInputModule,
    MatOptionModule,
    MatFormFieldModule,
    DatepickerModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    FormsModule,
    MatStepperModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

