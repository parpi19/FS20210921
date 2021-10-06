import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto: 'Calculadora', icono: '', componente: CalculadoraComponent },
    {texto: 'inicio', icono: '', componente: HomeComponent },
    {texto: 'demos', icono: '', componente: DemosComponent},
  ]

  actual = this.menu[0].componente;


  seleccionar(indice: number): void{
    this.actual = this.menu[indice].componente;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
