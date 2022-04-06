import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab06DatabindingAss1Component } from './lab06-databinding-ass1.component';

describe('Lab06DatabindingAss1Component', () => {
  let component: Lab06DatabindingAss1Component;
  let fixture: ComponentFixture<Lab06DatabindingAss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab06DatabindingAss1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab06DatabindingAss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
