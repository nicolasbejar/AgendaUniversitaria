/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContenidoMultimediaService } from './contenidoMultimedia.service';

describe('Service: ContenidoMultimedia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContenidoMultimediaService]
    });
  });

  it('should ...', inject([ContenidoMultimediaService], (service: ContenidoMultimediaService) => {
    expect(service).toBeTruthy();
  }));
});
