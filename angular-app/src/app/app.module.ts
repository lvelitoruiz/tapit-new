import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {DialogModule} from './dialog/dialog.module';
import {AppCommonModule} from './app-common.module';
import localeEs from '@angular/common/locales/es-CO';
import {registerLocaleData} from '@angular/common';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';

registerLocaleData(localeEs, 'es-CO');

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogModule,
    HttpClientModule,
    AppCommonModule,
    SlickCarouselModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(250,250,250,1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#FF5005', 
      secondaryColour: '#FF5005', 
      tertiaryColour: '#FF5005'
    })
  ],
  bootstrap: [AppComponent],
  providers: [{provide: LOCALE_ID, useValue: 'es-CO'}]
})
export class AppModule {
}
