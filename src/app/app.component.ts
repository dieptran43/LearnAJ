import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1><h2 style="color: red;"> A Diep tu lam ne</h2>  
  <my_tutorial></my_tutorial>
  <my_bindData></my_bindData>  
  <h1>{{myBindData}}</h1>
  <img [src]="imageSrc" />
  <br/>
  <input type="text" [value]="welcomeText"  #nameText/>
  <h2>Ban da nhap: [nameText]</h2>
  
  `,
})
export class AppComponent  { 
  name = 'Angular';
  public myBindData = "Day la Bind Data One way binding";
  public imageSrc ="http://lorempixel.com/300/300";
  public welcomeText ="Hay nhap gia tri mong muon";
 }
