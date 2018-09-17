import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinijaFormaComponent } from './linija-forma.component';

describe('LinijaFormaComponent', () => {
  let component: LinijaFormaComponent;
  let fixture: ComponentFixture<LinijaFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinijaFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinijaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
