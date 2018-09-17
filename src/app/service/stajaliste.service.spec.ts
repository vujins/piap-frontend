import { TestBed } from '@angular/core/testing';

import { StajalisteService } from './stajaliste.service';

describe('StajalisteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StajalisteService = TestBed.get(StajalisteService);
    expect(service).toBeTruthy();
  });
});
