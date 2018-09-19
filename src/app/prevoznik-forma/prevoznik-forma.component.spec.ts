import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevoznikFormaComponent } from './prevoznik-forma.component';

describe('PrevoznikFormaComponent', () => {
  let component: PrevoznikFormaComponent;
  let fixture: ComponentFixture<PrevoznikFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevoznikFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevoznikFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
