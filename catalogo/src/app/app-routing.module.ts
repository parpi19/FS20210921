import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresAddComponent, ActoresEditComponent, ActoresListComponent, ActoresViewComponent } from './actores/componente.component';
import { CategoriasAddComponent, CategoriasEditComponent, CategoriasListComponent, CategoriasViewComponent } from './categorias/componente.component';
import { IdiomasListComponent, IdiomasAddComponent, IdiomasEditComponent, IdiomasViewComponent } from './idiomas/componente.component';
import { PageNotFoundComponent } from './main';
import { PeliculasListComponent, PeliculasAddComponent, PeliculasEditComponent, PeliculasViewComponent, PeliculasComponent } from './peliculas/componente.component';
import { RegisterUserComponent } from './security';

const routes: Routes = [  { path: '', pathMatch: 'full', component: PeliculasComponent },
{ path: 'peliculas', children: [
  { path: '', component: PeliculasListComponent },
  { path: 'add', component: PeliculasAddComponent },
  { path: ':id/edit', component: PeliculasEditComponent },
  { path: ':id', component: PeliculasViewComponent },
  { path: ':id/:kk', component: PeliculasViewComponent },
]},
{ path: 'actores', children: [
  { path: '', component: ActoresListComponent },
  { path: 'add', component: ActoresAddComponent },
  { path: ':id/edit', component: ActoresEditComponent },
  { path: ':id', component: ActoresViewComponent },
  { path: ':id/:kk', component: ActoresViewComponent },
]},
{ path: 'categorias', children: [
  { path: '', component: CategoriasListComponent },
  { path: 'add', component: CategoriasAddComponent },
  { path: ':id/edit', component: CategoriasEditComponent },
  { path: ':id', component: CategoriasViewComponent },
  { path: ':id/:kk', component: CategoriasViewComponent },
]},
{ path: 'idiomas', children: [
  { path: '', component: IdiomasListComponent },
  { path: 'add', component: IdiomasAddComponent },
  { path: ':id/edit', component: IdiomasEditComponent },
  { path: ':id', component: IdiomasViewComponent },
  { path: ':id/:kk', component: IdiomasViewComponent },
]},
{ path: 'registro', component: RegisterUserComponent },
{ path: '404.html', component: PageNotFoundComponent },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
