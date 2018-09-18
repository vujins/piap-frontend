import { TestBed } from '@angular/core/testing';

import { PrevoznikService } from './prevoznik.service';

describe('PrevoznikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrevoznikService = TestBed.get(PrevoznikService);
    expect(service).toBeTruthy();
  });
});
