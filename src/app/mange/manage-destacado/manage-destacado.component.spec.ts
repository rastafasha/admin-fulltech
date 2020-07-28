import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDestacadoComponent } from './manage-destacado.component';

describe('ManageDestacadoComponent', () => {
  let component: ManageDestacadoComponent;
  let fixture: ComponentFixture<ManageDestacadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDestacadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDestacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
