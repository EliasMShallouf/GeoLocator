import { TestBed } from '@angular/core/testing';

import { SharedAddressService } from './shared-address.service';

describe('SharedAddressService', () => {
  let service: SharedAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
