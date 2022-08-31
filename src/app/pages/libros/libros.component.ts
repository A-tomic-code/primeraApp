import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor() { 
    this.libros = []
  }

  addLibro(idLibro : HTMLInputElement, idUsuario : HTMLInputElement, titulo : HTMLInputElement, 
    tipo : HTMLInputElement, autor : HTMLInputElement, precio : HTMLInputElement, 
    foto : HTMLInputElement) {
    
      let libro = new Libro(titulo.value, tipo.value, autor.value, Number(precio.value),
         foto.value, Number(idLibro.value), Number(idUsuario.value))

         console.log(libro)
    
      this.libros.push(libro)
  }

  ngOnInit(): void {
  }

}
