import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLibroComponent } from './card-libro.component';

describe('CardLibroComponent', () => {
  let component: CardLibroComponent;
  let fixture: ComponentFixture<CardLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
