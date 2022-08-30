import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoLibroComponent } from './formulario-nuevo-libro.component';

describe('FormularioNuevoLibroComponent', () => {
  let component: FormularioNuevoLibroComponent;
  let fixture: ComponentFixture<FormularioNuevoLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNuevoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
