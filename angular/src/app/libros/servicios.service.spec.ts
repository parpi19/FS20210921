import { TestBed } from '@angular/core/testing';

import { LibrosViewModelService } from './servicios.service';

describe('ServiciosService', () => {
  let service: LibrosViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
