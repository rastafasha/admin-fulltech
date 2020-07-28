import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacadoFormComponent } from './destacado-form.component';

describe('DestacadoFormComponent', () => {
  let component: DestacadoFormComponent;
  let fixture: ComponentFixture<DestacadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestacadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestacadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
