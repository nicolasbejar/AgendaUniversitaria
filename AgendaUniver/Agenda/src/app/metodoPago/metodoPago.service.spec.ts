/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetodoPagoService } from './metodoPago.service';

describe('Service: MetodoPago', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetodoPagoService]
    });
  });

  it('should ...', inject([MetodoPagoService], (service: MetodoPagoService) => {
    expect(service).toBeTruthy();
  }));
});
