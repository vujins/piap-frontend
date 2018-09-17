import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VozacFormaComponent } from './vozac-forma.component';

describe('VozacFormaComponent', () => {
  let component: VozacFormaComponent;
  let fixture: ComponentFixture<VozacFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VozacFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VozacFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
