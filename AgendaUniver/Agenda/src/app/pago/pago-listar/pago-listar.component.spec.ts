/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagoListarComponent } from './pago-listar.component';

describe('PagoListarComponent', () => {
  let component: PagoListarComponent;
  let fixture: ComponentFixture<PagoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
