import { TestBed } from '@angular/core/testing';

import { EnvservService } from './envserv.service';

describe('EnvservService', () => {
  let service: EnvservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
