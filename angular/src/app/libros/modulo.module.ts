import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { LibrosComponent, LIBROS_COMPONENTES } from './componente.component';
// import {PaginatorModule} from 'primeng/paginator';
import { CommonComponentModule } from '../common-component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    LIBROS_COMPONENTES,
  ],
  exports: [
    LIBROS_COMPONENTES,

  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]), NgxPaginationModule,
    MyCoreModule, CommonServicesModule,
  ]
})
export class LibrosModule { }
