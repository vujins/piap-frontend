import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinjaMedjugradskaListComponent } from './linja-medjugradska-list.component';

describe('LinjaMedjugradskaListComponent', () => {
  let component: LinjaMedjugradskaListComponent;
  let fixture: ComponentFixture<LinjaMedjugradskaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinjaMedjugradskaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinjaMedjugradskaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
