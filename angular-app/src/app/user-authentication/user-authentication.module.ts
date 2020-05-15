import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AlreadyLoggedInGuard} from './authentication-guards/already-logged-in.guard';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AppCommonModule} from '../app-common.module';
import {DialogModule} from '../dialog/dialog.module';
import {LoaderModule} from '../loader/loader.module';
import { FacebookLoginPageComponent } from './facebook-login-page/facebook-login-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AlreadyLoggedInGuard]},
  {path: 'signup', component: SignUpComponent, canActivate: [AlreadyLoggedInGuard]},
  {path: 'facebook', component: FacebookLoginPageComponent, canActivate: [AlreadyLoggedInGuard]}
];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    FacebookLoginPageComponent
  ],
  imports: [
    AppCommonModule,
    DialogModule,
    LoaderModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserAuthenticationModule {
}
