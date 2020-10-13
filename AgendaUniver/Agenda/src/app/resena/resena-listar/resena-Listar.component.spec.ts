/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResenaListarComponent } from './resena-listar.component';

describe('ResenaListarComponent', () => {
  let component: ResenaListarComponent;
  let fixture: ComponentFixture<ResenaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
