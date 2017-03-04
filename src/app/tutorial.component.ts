import { Component }   from '@angular/core';

@Component({
    selector: 'my_tutorial',
    template: `
        <h2>This is template tutorial of TutorialComponent</h2>
        <p [ngClass]="{classOne:cone, classTwo:ctwo}">This is <strong>ngClass nhe ku </strong> apply style</p>
        <button (click)="toggle()">Click toggle</button>
        <h1>Cai Directive ngStyle nay laf style inline</h1>
        <p [ngStyle]="{'font-style':style, 'font-size':size}"> Noi dung muon hien thi inline ne</p>
        <my_stuctualDirectives></my_stuctualDirectives>
    `,
    styles: [
        `
            .classOne{
                color: blue;
            }
            .classTwo{
                background-color: red;
            }
        `
    ],
    
})

export class TutorialComponent{
    public cone = true;
    public ctwo = true;
    public style = "italic";
    public size ="30px";

    toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}