import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageArticuloComponent } from './manage-articulo.component';

describe('ManageArticuloComponent', () => {
  let component: ManageArticuloComponent;
  let fixture: ComponentFixture<ManageArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
