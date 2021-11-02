import { TestBed } from '@angular/core/testing';
import { PeliculasViewModelService } from './peliculas.service';

fdescribe('PeliculasViewModelService', () => {
  let service: PeliculasViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
