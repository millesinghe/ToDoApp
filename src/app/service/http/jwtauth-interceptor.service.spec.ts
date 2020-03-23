import { TestBed } from '@angular/core/testing';

import { JWTAuthInterceptorService } from './jwtauth-interceptor.service';

describe('JWTAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JWTAuthInterceptorService = TestBed.get(JWTAuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
