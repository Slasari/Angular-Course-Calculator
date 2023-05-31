import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  first_number: number = 0;
  second_number: number = 0;
  resultado: number = 0;

  sumar(a:number, b:number){
    this.resultado = a + b
  }
}
