import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  constructor(public librosService: LibrosService) { }

  addLibro(idLibro : HTMLInputElement, idUsuario : HTMLInputElement, titulo : HTMLInputElement, 
    tipo : HTMLInputElement, autor : HTMLInputElement, precio : HTMLInputElement, 
    foto : HTMLInputElement) {
    
      let libro = new Libro(titulo.value, tipo.value, autor.value, Number(precio.value),
         foto.value, Number(idLibro.value), Number(idUsuario.value))
      this.librosService.add(libro)
  }


  ngOnInit(): void {
  }

}
