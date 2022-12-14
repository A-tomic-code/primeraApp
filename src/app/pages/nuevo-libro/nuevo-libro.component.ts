import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.component.html',
  styleUrls: ['./nuevo-libro.component.css']
})
export class NuevoLibroComponent implements OnInit {

  constructor(public librosService: LibrosService, public usuarioService: UsuarioService) { 


  }

  addLibro(idLibro : HTMLInputElement, idUsuario : HTMLInputElement, titulo : HTMLInputElement, 
    tipo : HTMLInputElement, autor : HTMLInputElement, precio : HTMLInputElement, 
    foto : HTMLInputElement) {
    
      let libro = new Libro(titulo.value, tipo.value, autor.value, Number(precio.value),
         foto.value, -1, this.usuarioService.usuario.id)

      this.librosService.add(libro).subscribe( (response:any) => {

        console.log(response)

        idLibro.value = response.data.insertId
        
        
      })
  }


  ngOnInit(): void {
  }

}
