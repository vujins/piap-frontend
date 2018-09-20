import { TestBed } from '@angular/core/testing';

import { LinijaGradskaService } from './linija-gradska.service';

describe('LinijaGradskaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinijaGradskaService = TestBed.get(LinijaGradskaService);
    expect(service).toBeTruthy();
  });
});
