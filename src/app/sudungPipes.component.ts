import { Component } from '@angular/core';

@Component({
    selector: 'my_pipes',
    template:`
    <h1>VD ve PIPES ne</h1>
    <h3>Chu hoa: {{title | uppercase}}</h3>
    <h3>Chu thuong: {{title | lowercase}}</h3>
    <h3>Date: {{today | date | uppercase}}</h3>
    <h3>Date: {{today | date:'medium'}}</h3>
    <h3>Date: {{today | date:'shortTime'}}</h3>
    <h3>Date: {{today | date: 'mmss'}}</h3>
    <h3>Date: {{today | date: 'jms'}}</h3>
    <br/>Format Percent
    <h3>Percent: {{number | percent:'12.3-5'}}</h3>
    <br/>Noi ve Async pipes
<div>
    <code>promise|async</code>: 
    <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <span>Wait for it... {{ greeting | async }}</span>
  </div>
<h2> Vi du ve Decimal Pipes</h2>
<p>So: {{number | number:'2.7-9'}}</p>
<h2> Vi du ve Object JSON to String JSON</h2>
<p>{{obj | json}}</p>
<h2> Vi du ve Slice pipes</h2>
<ul>
    <li *ngFor="let i of collection | slice:0:2">{{i}}</li>
</ul>
    `,
    styles: [`
    `]
})

export class SuDungPipes{

    public title = "BIEN Thanh chu hoa";
    public today =  Date.now();
    public number = 0.1234;
    public obj: Object ={foo: 'bar', makert:'cho bua', address: 'Ba Chieu', numbers:[1,2,3,4,5,6]};
    //slice Pipes
    public collection: string[]=['anh', 'chi', 'co', 'di'];

    //Async pipes
    greeting: Promise<string> = null;
  arrived: boolean = false;
  private resolve: Function = null;
  constructor() { this.reset(); }
  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }
  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve('hi there!');
      this.arrived = true;
    }
  }

}