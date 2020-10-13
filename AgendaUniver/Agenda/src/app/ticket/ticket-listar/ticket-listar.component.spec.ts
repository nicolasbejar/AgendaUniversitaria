/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TicketListarComponent } from './ticket-listar.component';

describe('TicketListarComponent', () => {
  let component: TicketListarComponent;
  let fixture: ComponentFixture<TicketListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
