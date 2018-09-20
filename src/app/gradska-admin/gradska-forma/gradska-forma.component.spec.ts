import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradskaFormaComponent } from './gradska-forma.component';

describe('GradskaFormaComponent', () => {
  let component: GradskaFormaComponent;
  let fixture: ComponentFixture<GradskaFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradskaFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradskaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
