import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MyCoreModule } from 'src/lib/my-core';
import { MainModule } from './main';
import { CommonModule } from '@angular/common';
import { SecurityModule } from './security';


@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, MyCoreModule, MainModule, CommonModule, SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
