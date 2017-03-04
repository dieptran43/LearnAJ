import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TutorialComponent } from './tutorial.component';
import { StuctualDirectives } from './stuctualDirectives.component';
import { BindDataAngular } from './bindDataAngular.component';
//nhap lieu phai import form NgModule
import { FormsModule } from '@angular/forms';
//
import { TuongTacComponent } from './tuongtacComponent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TutorialComponent,
   StuctualDirectives, BindDataAngular, TuongTacComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
