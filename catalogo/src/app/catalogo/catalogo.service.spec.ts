import { TestBed } from '@angular/core/testing';

import { CatalogoViewModelService } from './catalogo.service';

describe('CatalogoViewModelService', () => {
  let service: CatalogoViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
