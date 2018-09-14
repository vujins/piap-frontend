import { TestBed } from '@angular/core/testing';

import { MycookieService } from './mycookie.service';

describe('MycookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycookieService = TestBed.get(MycookieService);
    expect(service).toBeTruthy();
  });
});
