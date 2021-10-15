import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { BLOG_COMPONENTES } from './componente.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],
  exports: [
    BLOG_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]), NgxPaginationModule,
    MyCoreModule, CommonServicesModule,

  ]
})
export class BlogModule { }
