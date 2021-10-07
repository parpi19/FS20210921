import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { MainModule } from './main';
import { CommonModule } from '@angular/common';
import { SecurityModule } from './security';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { NotificationComponent } from './main/notification/notification.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { CommonComponentModule } from './common-component';



@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    NotificationComponent,
    FormularioComponent,
    ClienteFormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MyCoreModule, MainModule, CommonModule, SecurityModule, CommonServicesModule, CommonComponentModule
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL},
    { provide: LOCALE_ID, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
