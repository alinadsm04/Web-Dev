import { TestBed } from '@angular/core/testing';

import { VacancyAPIServiceService } from './vacancy-apiservice.service';

describe('VacancyAPIServiceService', () => {
  let service: VacancyAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacancyAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
