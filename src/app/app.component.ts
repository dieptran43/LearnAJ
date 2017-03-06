import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
 
  styles: [`
    .redColor{
      color: red;
    }
  `]
})
export class AppComponent {
  public name = "angular 2";
  public cities= [{ Id: 1, Name: "Anh Diep" }, { Id: 2, Name: "Chi Duong" }, { Id: 3, Name: "Ba Tam" }];

  onSubmit(value: any) {
    console.log(value);

  }



}
