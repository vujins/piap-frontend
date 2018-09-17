import { TestBed } from '@angular/core/testing';

import { VozacService } from './vozac.service';

describe('VozacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VozacService = TestBed.get(VozacService);
    expect(service).toBeTruthy();
  });
});
