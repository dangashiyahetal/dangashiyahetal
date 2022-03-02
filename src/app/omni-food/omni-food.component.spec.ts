import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniFoodComponent } from './omni-food.component';

describe('OmniFoodComponent', () => {
  let component: OmniFoodComponent;
  let fixture: ComponentFixture<OmniFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
