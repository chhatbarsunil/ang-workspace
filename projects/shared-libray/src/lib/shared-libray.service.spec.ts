import { TestBed } from '@angular/core/testing';

import { SharedLibrayService } from './shared-libray.service';

describe('SharedLibrayService', () => {
  let service: SharedLibrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLibrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
