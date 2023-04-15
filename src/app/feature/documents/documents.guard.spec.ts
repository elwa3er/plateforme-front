import { TestBed } from '@angular/core/testing';

import { DocumentsGuard } from './documents.guard';

describe('DocumentsGuard', () => {
  let guard: DocumentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DocumentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
