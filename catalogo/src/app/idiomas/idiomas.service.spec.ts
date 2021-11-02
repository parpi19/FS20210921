import { TestBed } from '@angular/core/testing';

import { IdiomasViewModelService } from './idiomas.service';

describe('IdiomasViewModelService', () => {
  let service: IdiomasViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdiomasViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
