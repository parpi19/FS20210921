import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { AjaxWaitInterceptor, MainModule } from './main';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { CommonComponentModule } from './common-component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor,  SecurityModule } from './security';
import { ActoresModule } from './actores';
import { CategoriasModule } from './categorias';
import { IdiomasModule } from './idiomas';
import { PeliculasModule } from './peliculas';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MyCoreModule, MainModule, SecurityModule, CommonServicesModule,
    CommonComponentModule, ActoresModule, CategoriasModule, IdiomasModule, PeliculasModule,

  ],
  providers: [
    LoggerService,
    // { provide: LoggerService, useClass: LoggerHTTPService },
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES'},
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
