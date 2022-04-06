import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab06DatabindingAss2Component } from './lab06-databinding-ass2.component';

describe('Lab06DatabindingAss2Component', () => {
  let component: Lab06DatabindingAss2Component;
  let fixture: ComponentFixture<Lab06DatabindingAss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab06DatabindingAss2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab06DatabindingAss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
