import { TestBed } from '@angular/core/testing';

import { AutobusService } from './autobus.service';

describe('AutobusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutobusService = TestBed.get(AutobusService);
    expect(service).toBeTruthy();
  });
});
