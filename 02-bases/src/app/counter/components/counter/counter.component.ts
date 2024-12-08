import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="increaceBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaceBy(-1)">-1</button>
  `
})
export class CounterComponent{
  public counter: number = 10;

  increaceBy(arg:number): void{

    this.counter+=arg;

  }
  resetCounter(){
    this.counter = 10;
  }
}
