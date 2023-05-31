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

  sumar(): void{
    this.resultado = this.first_number + this.second_number
  }
  restar(): void{
    this.resultado = this.first_number - this.second_number
  }
  multiplicar(): void{
    this.resultado = this.first_number * this.second_number
  }
  dividir(): void{
    this.resultado = this.first_number / this.second_number
  }
}
