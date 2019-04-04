import { TestBed } from '@angular/core/testing';

import { ApiFetcherService } from './api-fetcher.service';

describe('ApiFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFetcherService = TestBed.get(ApiFetcherService);
    expect(service).toBeTruthy();
  });
  it('should send back something', () => {
    const service: ApiFetcherService = TestBed.get(ApiFetcherService);
    expect(service.toFetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=67b670f50bba99d9bf79e08cf5962c18`)).toBe(true);
  });
  it('should send back the result', () => {
    const service: ApiFetcherService = TestBed.get(ApiFetcherService);
    expect(service.add(1,2)).toBe("3")
  });
});
