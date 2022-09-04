import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})

export class LibrosService {

  public libros: Libro[] = [];

  private url = 'http://localhost:5555/libros';

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(this.url)
  }

  getOne(id_libro: number){
    return this.http.get(this.url + `?id=${id_libro}`)
  }

  add(libro: Libro){
    return this.http.post(this.url, libro)
  }

  edit(libro: Libro){
    return this.http.put(this.url, libro)
  }

  delete(id_libro: number){
    console.log(id_libro);

    let options = {
      headers : new HttpHeaders({'content-type' : 'application/json'}),
      body : {id : id_libro}
    }

    return this.http.delete(this.url, options)
  }

}