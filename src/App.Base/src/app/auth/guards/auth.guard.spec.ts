import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot([], {}),
      ],
      providers: [AuthGuard]
    });
  });

  it('should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
