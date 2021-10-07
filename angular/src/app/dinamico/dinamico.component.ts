import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
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
    {texto: 'ClienteFormulario', icono: '', componente: ClienteFormularioComponent },
    {texto: 'Formulario', icono: '', componente: FormularioComponent },
    {texto: 'Calculadora', icono: '', componente: CalculadoraComponent },
    {texto: 'inicio', icono: '', componente: HomeComponent },
    {texto: 'demos', icono: '', componente: DemosComponent},
    {texto: 'notification', icono: '', componente: NotificationComponent},
  ]

  actual = this.menu[0].componente;


  seleccionar(indice: number): void{
    this.actual = this.menu[indice].componente;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
