import { TestBed } from '@angular/core/testing';

import { NotificacionService } from './notification.service';

describe('NotificacionService', () => {
  let service: NotificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
