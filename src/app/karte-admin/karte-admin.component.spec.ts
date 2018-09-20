import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarteAdminComponent } from './karte-admin.component';

describe('KarteAdminComponent', () => {
  let component: KarteAdminComponent;
  let fixture: ComponentFixture<KarteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
