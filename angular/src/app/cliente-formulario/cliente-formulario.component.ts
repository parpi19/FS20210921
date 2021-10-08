import { Component, Injectable, OnInit } from '@angular/core';
import { NotificacionService, NotificationType } from '../common-services';

export interface Cliente {
  customer_id: number | null;
  store_id: number | null;
  first_name: string;
  last_name: string;
  email: string | null;
  adress_id: string | null;
  active: boolean | null;
  create_date: Date | null;
  last_update: Date | null;
}

@Injectable({ providedIn: 'root' })
export class ClientesViewModel {
  Listado: Array<Cliente> = [];

  Elemento: Cliente = {
    customer_id: null,
    store_id: null,
    first_name: '',
    last_name: '',
    email: null,
    adress_id: null,
    active: null,
    create_date: null,
    last_update: null,
  };
  IsAdd = true;

  constructor(private notify: NotificacionService) {
    this.add();
  }

  public add() {
    this.Elemento = {
      customer_id: null,
      store_id: null,
      first_name: '',
      last_name: '',
      email: null,
      adress_id: null,
      active: null,
      create_date: null,
      last_update: null,
    };
    this.IsAdd = true;
  }

  public send() {
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info);
  }

  public cancel(){

  }

  public delete(){
    if(!window.confirm("¿Seguro?")){
      this.notify.add('Borrado');
    }

  }

  public view() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public edit() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;

  }
}

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss'],
})
export class ClienteFormularioComponent implements OnInit {

  constructor(public vm: ClientesViewModel) {}

  ngOnInit(): void {}
}
