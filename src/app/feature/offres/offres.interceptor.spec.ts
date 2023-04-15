import { TestBed } from '@angular/core/testing';

import { OffresInterceptor } from './offres.interceptor';

describe('OffresInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [OffresInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: OffresInterceptor = TestBed.inject(OffresInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
