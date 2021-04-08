import { TestBed } from '@angular/core/testing';

import { CreateCarServiceService } from './create-car-service.service';

describe('CreateCarServiceService', () => {
  let service: CreateCarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
