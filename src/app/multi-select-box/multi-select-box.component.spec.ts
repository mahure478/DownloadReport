import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectBoxComponent } from './multi-select-box.component';

describe('MultiSelectBoxComponent', () => {
  let component: MultiSelectBoxComponent;
  let fixture: ComponentFixture<MultiSelectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectBoxComponent]
    });
    fixture = TestBed.createComponent(MultiSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
