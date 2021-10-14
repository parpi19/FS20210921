import { TestBed } from '@angular/core/testing';

import { LibrosDAOService } from './servicios.service';

describe('ServiciosService', () => {
  let service: LibrosDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
