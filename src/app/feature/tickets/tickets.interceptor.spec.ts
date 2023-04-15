import { TestBed } from '@angular/core/testing';

import { TicketsInterceptor } from './tickets.interceptor';

describe('TicketsInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TicketsInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: TicketsInterceptor = TestBed.inject(TicketsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
