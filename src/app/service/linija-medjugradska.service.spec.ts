import { TestBed } from '@angular/core/testing';

import { LinijaMedjugradskaService } from './linija-medjugradska.service';

describe('LinijaMedjugradskaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinijaMedjugradskaService = TestBed.get(LinijaMedjugradskaService);
    expect(service).toBeTruthy();
  });
});
