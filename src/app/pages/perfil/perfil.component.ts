import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario : Usuario

  constructor() { 

    this.usuario = new Usuario();

  }

  getUser(nombre : HTMLInputElement, apellidos : HTMLInputElement,
    correo : HTMLInputElement, imagen : HTMLInputElement): void
  {


    this.usuario.nombre = nombre.value;   
    this.usuario.apellidos = apellidos.value;   
    this.usuario.correo = correo.value;   
    this.usuario.imagen = imagen.value;  
    
    console.log('Nombre --> ' + this.usuario.nombre)

  }

  hello(){
    console.log('hello')
  }


  ngOnInit(): void {
  }

}
