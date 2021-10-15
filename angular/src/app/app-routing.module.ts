import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos/componente.component';
import { DemosComponent } from './demos/demos.component';
import { LibrosAddComponent, LibrosEditComponent, LibrosListComponent, LibrosViewComponent } from './libros/componente.component';
import { HomeComponent, PageNotFoundComponent } from './main';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'chisme/de/hacer/numeros', component: CalculadoraComponent },
  { path: 'contactos', children: [
    { path: '', component: ContactosListComponent},
    { path: 'add', component: ContactosAddComponent},
    { path: ':id/edit', component: ContactosEditComponent},
    { path: ':id', component: ContactosViewComponent},
    { path: ':id/:kk', component: ContactosViewComponent},
    ]},
  { path: 'libros', children: [
    { path: '', component: LibrosListComponent},
    { path: 'add', component: LibrosAddComponent},
    { path: ':id/edit', component: LibrosEditComponent},
    { path: ':id', component: LibrosViewComponent},
    { path: ':id/:kk', component: LibrosViewComponent},
    ]},
  { path: 'antonie/hasted', redirectTo: '/contactos/27'},
  { path: 'config', loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)},
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
