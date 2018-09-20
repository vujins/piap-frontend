import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradskaAdminComponent } from './gradska-admin.component';

describe('GradskaAdminComponent', () => {
  let component: GradskaAdminComponent;
  let fixture: ComponentFixture<GradskaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradskaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradskaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
