import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverseShoesComponent } from './converse-shoes.component';

describe('ConverseShoesComponent', () => {
  let component: ConverseShoesComponent;
  let fixture: ComponentFixture<ConverseShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverseShoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverseShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
