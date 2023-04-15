import { TestBed } from '@angular/core/testing';

import { OffresGuard } from './offres.guard';

describe('OffresGuard', () => {
  let guard: OffresGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OffresGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
