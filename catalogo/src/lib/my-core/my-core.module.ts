import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { DIRECTIVAS_ATRIBUTO } from './directives/atributos.directive';
import { MIS_VALIDADORES } from './directives/validadores/validadores.directive';
import { UnlessDirective } from './directives/estructurales.directive';
import { VALIDATORS_DATES } from './directives/validadores/dates.directive';



@NgModule({
  declarations: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES, UnlessDirective, VALIDATORS_DATES
  ],
  exports: [
    SizerComponent, PIPES_CADENAS, DIRECTIVAS_ATRIBUTO, MIS_VALIDADORES, UnlessDirective, VALIDATORS_DATES
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
