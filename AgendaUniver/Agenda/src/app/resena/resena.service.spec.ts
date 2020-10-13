/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResenaService } from './resena.service';

describe('Service: Resena', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResenaService]
    });
  });

  it('should ...', inject([ResenaService], (service: ResenaService) => {
    expect(service).toBeTruthy();
  }));
});
