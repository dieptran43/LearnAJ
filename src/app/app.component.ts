import { Component, ViewChild } from '@angular/core';
import {TuongTacComponent}  from './tuongtacComponent.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1><h2 style="color: red;"> A Diep tu lam ne</h2>  
  <my_tutorial></my_tutorial>
  <my_bindData></my_bindData>  
  <h1>{{myBindData}}</h1>
  <img [src]="imageSrc" />
  <br/>Class binding va style binding
  <h3 [class.redColor]="applyClass"> Thong tin class Apply</h3>
  <h1 [style.color]="blueTrue ?'blue':'yellow'"> Noi dung thay doi theo binding style</h1>
  
  <input type="text" [value]="welcomeText"  #nameText/> 
  <button (mouseover)="onClick()">Re chuot vao nhan qua</button>
  <h2>Ban da nhap: {{nameText.value}}</h2>

  <br/>Day la noi dung TWO WAY BINDING
  <input type="text" [(ngModel)]="fname"/>
  <input type="text" [(ngModel)]="lname"/>
  Full name: {{fname}} {{lname}}
<br/>
Moi nhap gia tri de truyen xuong component con nhe ku
<input type="text" #textNameInput (keyup)="0" />
<my_TuongTacComponent *ngFor="let item of  listNames" [nameInput]="textNameInput.value" (onVote)="parentVote($event)"></my_TuongTacComponent>
<h2>Ket qua la Chon: {{agree}}, Khong : {{disgree}}</h2>
<br/>
Dung o cha doi ten cho con
<button (click)="changeName()">Doi ten</button>
  `,
  styles: [`
    .redColor{
      color: red;
    }
  `]
})
export class AppComponent  { 
  name = 'Angular';
  public myBindData = "Day la Bind Data One way binding";
  public imageSrc ="http://lorempixel.com/300/300";
  public welcomeText ="Hay nhap gia tri mong muon";
  public applyClass = true;
  public blueTrue = false;

  onClick(){
    console.log('Da click button');
  }

  public agree: number = 0;
  public disgree: number = 0;
  public listNames = ['A. Diep','Chi Hieu','A Quan','Chi Nga'];
  parentVote(agree:boolean){
    if(agree) this.agree++;
    else this.disgree++;
  }

  @ViewChild(TuongTacComponent)
  private tuongTacComponent: TuongTacComponent;
  
  changeName(){
    this.tuongTacComponent.setName('Dung o cha, doi ten cho con');
  }

 }
