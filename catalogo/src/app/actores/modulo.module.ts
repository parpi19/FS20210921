import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { ACTORES_COMPONENTES } from './componente.component';
import { CommonComponentModule } from '../common-component';

@NgModule({
  declarations: [
    ACTORES_COMPONENTES,
  ],
  exports: [
    ACTORES_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
    CommonComponentModule, MyCoreModule,
  ]
})
export class ActoresModule { }
