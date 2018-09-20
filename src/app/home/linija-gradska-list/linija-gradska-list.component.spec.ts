import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinijaGradskaListComponent } from './linija-gradska-list.component';

describe('LinijaGradskaListComponent', () => {
  let component: LinijaGradskaListComponent;
  let fixture: ComponentFixture<LinijaGradskaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinijaGradskaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinijaGradskaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
