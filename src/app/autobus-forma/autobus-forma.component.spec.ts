import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobusFormaComponent } from './autobus-forma.component';

describe('AutobusFormaComponent', () => {
  let component: AutobusFormaComponent;
  let fixture: ComponentFixture<AutobusFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutobusFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutobusFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
