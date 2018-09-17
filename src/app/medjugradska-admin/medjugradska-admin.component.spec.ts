import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedjugradskaAdminComponent } from './medjugradska-admin.component';

describe('MedjugradskaAdminComponent', () => {
  let component: MedjugradskaAdminComponent;
  let fixture: ComponentFixture<MedjugradskaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedjugradskaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedjugradskaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
