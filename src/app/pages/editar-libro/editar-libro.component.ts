import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  constructor(public librosService : LibrosService) { }

  editLibro(idLibro : HTMLInputElement, idUsuario : HTMLInputElement, titulo : HTMLInputElement, 
    tipo : HTMLInputElement, autor : HTMLInputElement, precio : HTMLInputElement, 
    foto : HTMLInputElement) 
  {
    
    let libro = new Libro(titulo.value, tipo.value, autor.value, Number(precio.value),
      foto.value, Number(idLibro.value), Number(idUsuario.value));

    console.log(libro);

    this.librosService.edit(libro)
      
  }


  ngOnInit(): void {  }

}
