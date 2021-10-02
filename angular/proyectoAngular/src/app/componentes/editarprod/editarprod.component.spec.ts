import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarprodComponent } from './editarprod.component';

describe('EditarprodComponent', () => {
  let component: EditarprodComponent;
  let fixture: ComponentFixture<EditarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
