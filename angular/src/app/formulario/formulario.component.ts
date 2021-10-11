import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificacionService, NotificationType } from '../common-services';

export interface Persona {
  id: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  edad: number | null;
  dni: string | null;
}

@Injectable({providedIn: 'root'})
export class PersonasViewModel {
  Listado: Array<Persona> = [
    { id: 1, nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito@grillo', edad: 99, dni: '12345678A'}
  ];
  Elemento: Persona = { id: null, nombre: '', apellidos: '', correo: null, edad: null, dni: null};
  IsAdd = true;

  constructor(private notify: NotificacionService, private http: HttpClient) {

  }

  public list(): void{

  }

  public add() {
    this.Elemento = { id: null, nombre: '', apellidos: '', correo: null, edad: null, dni: null}
    this.IsAdd = true;
  }

  public edit() {
    this.http.get<Persona>(`http://localhost:4321/api/personas/${this.Elemento.id}`).subscribe(
      data => {
        this.Elemento = data;
        this.IsAdd = false;
      },
      err => this.notify.add(err.Message)
    )
  }

  public view(){
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public delete(){
    this.notify.add('Borrado');
  }

  public cancel(){

  }

  public send(){
    let peticion:Observable <any>;
    if (this.IsAdd)
     peticion = this.http.post(`http://localhost:4321/api/personas/`, this.Elemento)
    else
      peticion = this.http.post(`http://localhost:4321/api/personas/${this.Elemento.id}`, this.Elemento)
    peticion.subscribe(
      data => this.notify.add('OK', NotificationType.info),
      err => this.notify.add(err.Message)
    )
    // this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info);
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(public vm: PersonasViewModel) { }

  ngOnInit(): void {
  }

}
