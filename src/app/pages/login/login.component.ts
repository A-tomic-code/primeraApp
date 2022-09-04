import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioService:UsuarioService, private router:Router) { }

  login(nombre:HTMLInputElement, password:HTMLInputElement){
    let user = new Usuario(nombre.value,'',password.value, '','');

    this.usuarioService.login(user).subscribe( (response:any) => {

      if(response.data && response.data[0]){
        
        user.id = response.data[0].id;
        user.apellidos = response.data[0].apellidos;
        user.correo = response.data[0].correo;
        user.imagen = response.data[0].foto;
        
        this.usuarioService.usuario = user;
        this.usuarioService.logeado = true;
        
        this.router.navigateByUrl('libros');
        
      }else{
        console.error('AUTENTICACION FALLIDA');
      }
      
      console.log(this.usuarioService.usuario);

    });
  }

  ngOnInit(): void {
  }

}
