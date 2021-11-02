import { TestBed } from '@angular/core/testing';

import { CategoriasViewModelService } from './categorias.service';

describe('CategoriasViewModelService', () => {
  let service: CategoriasViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
