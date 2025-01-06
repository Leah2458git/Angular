import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'observable-demo',
  templateUrl: './observable-demo.component.html'
})
export class ObservableDemoComponent {

  source:Observable<number>=new Observable((obs)=>{
    obs.next(1)
    obs.next(2)
    setTimeout(()=>{
      obs.next(3)
    },3000)
  })

  x!:number;
  timerValue!:string;

  timer:Observable<Date>=interval(1000).pipe(map(x=>{return new Date}))

  constructor(){
    this.source.subscribe(
      (val)=>{
        this.x=val;
        console.log(val);
      },
      (err)=>{
        console.log(err);
        
      },
      ()=>{
        console.log("observable completed");
        this.x=0
      }

    )
    this.timer.subscribe(
      (val)=>{
        this.timerValue=val.toLocaleTimeString()
        
      }
    )
  }
}


