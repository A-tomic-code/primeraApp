import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})

export class UsuarioService {
  
  private url: String = 'http://localhost:5555';

  public logeado: Boolean = false;
  public usuario: Usuario;

  constructor(private http:HttpClient) {}

  login(user: Usuario) {
    return this.http.post(this.url + '/login', user);
  }

  register(user: Usuario) {
    return this.http.post(this.url + '/registrarse', user);
  }
  
}
