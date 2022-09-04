import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  public libros: Libro[] = [];

  constructor(public librosService: LibrosService) {
    librosService.getAll().subscribe((response: any) => {
      this.libros = response.data;
    });
  }

  buscar(search: HTMLInputElement): void {
    console.log(Number(search.value));

    if (search.value.length > 0) {

      this.librosService.getOne(Number(search.value)).subscribe((response: any) => {
          this.libros = response.data;
        });

    } else {

      this.librosService.getAll().subscribe((response: any) => {
        
        this.libros = response.data;
        console.log(response.data);

      });
    }
  }

  borrar(id_libro: number) {

    this.librosService.delete(id_libro).subscribe((response: any) => {
      console.log(response);

    });

    this.librosService.getAll().subscribe((response: any) => {
      this.libros = response.data;
    });
  }

  ngOnInit(): void {}
}
