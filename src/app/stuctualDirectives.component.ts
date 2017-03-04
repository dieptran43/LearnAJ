import { Component } from '@angular/core'

@Component({
    selector: 'my_stuctualDirectives',
    template:`
        <h1>Toi noi day chinh la components Stuctual Directives</h1>
        <p>{{title}}</p>
        <h4 *ngIf="showLineIf"> This is ngIf directive line</h4>
        <div [ngSwitch]="color">
            <p *ngSwitchCase="'red'">This is red</p>
            <p *ngSwitchCase="'yellow'">This is yellow</p>
            <p *ngSwitchCase="'blue'">This is bule</p>
            <p *ngSwitchDefault>Invalid colour</p>
        </div>
        <div>
        <ul>
            <li *ngFor="let mau of colors">Mau sac {{mau}}</li>
        </ul>
        </div>
    `,
    styles: [`
    `]
})

export class StuctualDirectives{
    public title ="bien title";
    public showLineIf = true;
    public color = "blue";
    public colors: string[] = ["red","yellow", "blue"];
}