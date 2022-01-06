import { TestBed } from '@angular/core/testing';

import { HeightServiceService } from './height-service.service';

describe('HeightServiceService', () => {
  let service: HeightServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeightServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
