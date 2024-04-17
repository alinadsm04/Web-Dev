import { TestBed } from '@angular/core/testing';

import { CompanyAPIServiceService } from './company-apiservice.service';

describe('CompanyAPIServiceService', () => {
  let service: CompanyAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
