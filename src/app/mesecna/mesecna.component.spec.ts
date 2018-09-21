import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesecnaComponent } from './mesecna.component';

describe('MesecnaComponent', () => {
  let component: MesecnaComponent;
  let fixture: ComponentFixture<MesecnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesecnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesecnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
