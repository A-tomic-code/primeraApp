import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor(public librosService : LibrosService) {
    this.libros = librosService.libros;
  }

  buscar(search : HTMLInputElement): void{

    console.log(Number(search.value))

    if(search.value.length > 0){

      this.libros = this.librosService.getOne( Number(search.value) )

    }else{

      this.libros = this.librosService.getAll()

    }
  }

  ngOnInit(): void {
  }

}
