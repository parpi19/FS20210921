import { TestBed } from '@angular/core/testing';

import { ActoresViewModelService } from './actores.service';

describe('CatalogoViewModelService', () => {
  let service: ActoresViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActoresViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
