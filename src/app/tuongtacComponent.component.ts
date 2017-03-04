import { Component, Input, Output, EventEmitter }from '@angular/core';
@Component({
    selector:"my_TuongTacComponent",
    template:`
    <h2> Vi du voi Input Component</h2>
  
    <h1> {{nameInput}}</h1>
    <button [disabled]="voted" (click)="voteFunc(true)"> Agree </button>
    <button [disabled]="voted" (click)="voteFunc(false)"> Disgree </button>
    Result :{{voted}}
    `,
    styles:[`
    `],
})

export class TuongTacComponent{
    @Input() nameInput: string;
    @Output() onVote = new EventEmitter<boolean>();
    public voted:boolean = false;

    voteFunc(agree:boolean){
        this.voted = true;
        this.onVote.emit(agree);
    }

    setName(name:string){
        this.nameInput = name;

    }
}
