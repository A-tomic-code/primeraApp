import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild('textHome') txt: ElementRef;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    let cosas = ['Bienvenido', 'a mi primer proyecto', 'en Angular']
    let timer_counter = 0

    let timer = setInterval( () =>{
      this.txt.nativeElement.innerText = cosas[timer_counter];
      timer_counter++;

      if(timer_counter>=cosas.length){
        console.log('cierro')
        clearInterval(timer)
      }
    }, 1500)
    
  }


}

