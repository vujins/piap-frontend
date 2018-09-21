import { TestBed } from '@angular/core/testing';

import { CenaService } from './cena.service';

describe('CenaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CenaService = TestBed.get(CenaService);
    expect(service).toBeTruthy();
  });
});
