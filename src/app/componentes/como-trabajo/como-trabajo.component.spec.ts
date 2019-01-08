import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoTrabajoComponent } from './como-trabajo.component';

describe('ComoTrabajoComponent', () => {
  let component: ComoTrabajoComponent;
  let fixture: ComponentFixture<ComoTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
