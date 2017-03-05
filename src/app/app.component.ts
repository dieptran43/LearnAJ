import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <h2 [class]="'redColor'"> Dang o AppComponent</h2>  
  <my_pipes></my_pipes>
  `,
  styles: [`
    .redColor{
      color: red;
    }
  `]
})
export class AppComponent  {   
  public name = "angular 2";
 }
