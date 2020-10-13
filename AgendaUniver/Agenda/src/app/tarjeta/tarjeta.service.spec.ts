/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TarjetaService } from './tarjeta.service';

describe('Service: Tarjeta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarjetaService]
    });
  });

  it('should ...', inject([TarjetaService], (service: TarjetaService) => {
    expect(service).toBeTruthy();
  }));
});
