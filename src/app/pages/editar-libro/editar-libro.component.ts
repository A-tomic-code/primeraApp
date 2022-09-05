import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  constructor(public librosService : LibrosService, public usuarioService : UsuarioService) { }

  editLibro(idLibro : HTMLInputElement, idUsuario : HTMLInputElement, titulo : HTMLInputElement, 
    tipo : HTMLInputElement, autor : HTMLInputElement, precio : HTMLInputElement, 
    foto : HTMLInputElement) 
  {
    
    let libro = new Libro(titulo.value, tipo.value, autor.value, Number(precio.value),
      foto.value, Number(idLibro.value), this.usuarioService.usuario.id);

    console.log(libro);

    this.librosService.edit(libro).subscribe( (response:any) => {
      console.log(response)
    });
      
  }


  ngOnInit(): void {  }

}
