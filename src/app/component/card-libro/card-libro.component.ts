import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card-libro',
  templateUrl: './card-libro.component.html',
  styleUrls: ['./card-libro.component.css']
})
export class CardLibroComponent implements OnInit {

  @Input() libro: Libro;
  @Output() onDeleteBook = new EventEmitter<Libro>()

  constructor() { }

  eliminarLibro(){
    this.onDeleteBook.emit(this.libro);
  }

  ngOnInit(): void {
  }

}
