import { TestBed } from '@angular/core/testing';

import { NutriBbService } from './nutri-bb.service';

describe('NutriBbService', () => {
  let service: NutriBbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutriBbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
