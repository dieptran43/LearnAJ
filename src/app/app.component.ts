import { Component, OnInit } from '@angular/core';
import {LoginService } from './services/login.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
 
  styles: [`
    .redColor{
      color: red;
    }
  `]
})
export class AppComponent implements OnInit {
    
  public name = "angular 2";
  public cities= [{ Id: 1, Name: "Anh Diep" }, { Id: 2, Name: "Chi Duong" }, { Id: 3, Name: "Ba Tam" }];

  //Khai baos bieens ddanh dau da login
  public isLoggedIn: boolean;
  constructor(private loginService : LoginService){

  }

  ngOnInit() {
   
      this.isLoggedIn = this.loginService.IsLogined();
      // alert('Toi ben OnInit chay gia tri IsLogined la :' + this.isLoggedIn );
  }

  onSubmit(value: any) {
    console.log(value);

  }

  //1 ham Logout
  Logout(){
    alert('Ban da logout roi nhe ku');
    this.loginService.setLogin(false);
  }



}
