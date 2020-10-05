import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DialogModule} from './dialog/dialog.module';
import {LoaderModule} from './loader/loader.module';
import {LoginComponent} from './auth/login/login.component';
import {AppHeaderComponent} from './app-header/app-header.component';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AppComponent} from './app.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component';
import {AgeValidatorComponent} from './auth/age-validator/age-validator.component';
import {UnderAgeComponent} from './auth/under-age/under-age.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'age-validator',
    component: AgeValidatorComponent
  },
  {
    path: 'under-age',
    component: UnderAgeComponent
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent
  },
  {
    path: 'recover-password/:email',
    component: RecoverPasswordComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    AppHeaderComponent,
    AppComponent,
    SignUpComponent,
    RecoverPasswordComponent,
    AgeValidatorComponent,
    UnderAgeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    LoaderModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
