import { TestBed } from '@angular/core/testing';

import { DocumentsInterceptor } from './documents.interceptor';

describe('DocumentsInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [DocumentsInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: DocumentsInterceptor =
      TestBed.inject(DocumentsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
