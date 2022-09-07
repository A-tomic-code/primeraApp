import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})

export class LibrosService {

  public libros: Libro[] = [];

  private url = 'http://localhost:5555/libros';

  constructor(private http:HttpClient, public usuarioService: UsuarioService) { }

  getAll() {
    return this.http.get(this.url + '?id_usuario=' + this.usuarioService.usuario.id)
  }

  getOne(id_libro: Number){
    let id_usuario = this.usuarioService.usuario.id;
    return this.http.get(this.url + `?id_libro=${id_libro}&id_usuario=${id_usuario}`)
  }

  add(libro: Libro){
    return this.http.post(this.url, libro)
  }

  edit(libro: Libro){
    return this.http.put(this.url, libro)
  }

  delete(id_libro: Number){
    console.log(id_libro);

    let options = {
      headers : new HttpHeaders({'content-type' : 'application/json'}),
      body : {id : id_libro}
    }

    return this.http.delete(this.url, options)
  }

}