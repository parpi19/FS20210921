import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IdiomasViewModelService } from './idiomas.service';


@Component({
  selector: 'app-idiomas',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class IdiomasComponent implements OnInit {
  constructor(protected vm: IdiomasViewModelService) {}
  public get VM(): IdiomasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-idiomas-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class IdiomasListComponent implements OnInit {
  public page: number = 0;
  constructor(protected vm: IdiomasViewModelService) {}
  public get VM(): IdiomasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-idiomas-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class IdiomasAddComponent implements OnInit {
  constructor(protected vm: IdiomasViewModelService) {}
  public get VM(): IdiomasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}

@Component({
  selector: 'app-idiomas-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class IdiomasEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: IdiomasViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): IdiomasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
      this.vm.edit(id);
      } else {
      this.router.navigate(['/404.html']);
      }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();

  }
}

@Component({
  selector: 'app-idiomas-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class IdiomasViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: IdiomasViewModelService,
    protected route: ActivatedRoute, protected router: Router) {}
  public get VM(): IdiomasViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
      this.vm.view(id);
      } else {
      this.router.navigate(['/404.html']);
      }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();

  }
}

export const IDIOMAS_COMPONENTES = [
  IdiomasComponent, IdiomasListComponent, IdiomasAddComponent,
  IdiomasEditComponent, IdiomasViewComponent,
 ];

