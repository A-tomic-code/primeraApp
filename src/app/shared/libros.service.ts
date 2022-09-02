import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})

export class LibrosService {

  public libros: Libro[] = [];

  constructor() { }

  getAll(): Libro[] {
    return this.libros
  }

  getOne(id_libro: number): Libro[]{
    let found = false;
    let i = 0;

    while(!found && i < this.libros.length){
      
      if(this.libros[i].id_libro == id_libro){
        found = true;
        break;
      }
      
      i++;
    }

    // let result = [ new Libro(this.libros[i].titulo, this.libros[i].tipo, this.libros[i].autor,
    //   this.libros[i].precio, this.libros[i].photo, this.libros[i].id_libro,
    //   this.libros[i].id_usuario) ];

    let result: Libro[] = [ this.libros[i] ]
    console.log(result)

    return result
  }

  add(libro: Libro): void{
    this.libros.push(libro)
  }

  edit(libro: Libro): Boolean{
    let result: Boolean = false;

    let i = this.libros.findIndex( (element) => element.id_libro === libro.id_libro);
    
    if(i != -1){
      this.libros[i] = libro;
      result = true;
    }

    return result;
  }

  delete(id_libro: number): Boolean{
    let result: Boolean = false;

    let i = this.libros.findIndex( (element) => element.id_libro === id_libro)
    
    if(i != -1){
      this.libros.splice(i, 1);
      result = true
    }

    return result
  }

}