import { TestBed } from '@angular/core/testing';

import { MesecnaService } from './mesecna.service';

describe('MesecnaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesecnaService = TestBed.get(MesecnaService);
    expect(service).toBeTruthy();
  });
});
