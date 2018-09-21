import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesecnaAdminComponent } from './mesecna-admin.component';

describe('MesecnaAdminComponent', () => {
  let component: MesecnaAdminComponent;
  let fixture: ComponentFixture<MesecnaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesecnaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesecnaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
