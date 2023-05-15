import { TestBed } from '@angular/core/testing';

import { PortafolioService } from './portafolio.service';

describe('PorfolioService', () => {
  let service: PortafolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
