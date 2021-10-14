import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent, CONTACTOS_COMPONENTES } from '../contactos/componente.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';
import { NotificationComponent } from '../main/notification/notification.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto: 'ContactosFormulario', icono: 'fas fa-book', componente: ContactosComponent },
    {texto: 'ClienteFormulario', icono: 'fas fa-user-tie', componente: ClienteFormularioComponent },
    {texto: 'Inicio', icono: 'fas fa-home', componente: HomeComponent },
    {texto: 'Calculadora', icono: 'fas fa-calculator', componente: CalculadoraComponent },
    {texto: 'Demos', icono: 'fas fa-desktop', componente: DemosComponent},
    {texto: 'Formulario', icono: 'fab fa-wpforms', componente: FormularioComponent },
    {texto: 'Notification', icono: 'far fa-bell', componente: NotificationComponent},
  ]

  actual = this.menu[0].componente;


  seleccionar(indice: number): void{
    this.actual = this.menu[indice].componente;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
