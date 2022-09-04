import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  constructor(public usuarioService: UsuarioService) {}

  register(nombre:HTMLInputElement, apellidos:HTMLInputElement, correo:HTMLInputElement,
    foto:HTMLInputElement, password1:HTMLInputElement, password2:HTMLInputElement) {

      if(password1.value === password2.value){

        let user = new Usuario(nombre.value, apellidos.value,
          password1.value, correo.value, foto.value);

        this.usuarioService.register(user).subscribe( (response:any) => {

          if(response.data.insertId){
            alert('REGISTRADO CON ID --> ' + response.data.insertId);
          }

        });
      }

    }

  ngOnInit(): void {}
}
