import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent {


  // המרת ה-BehaviorSubject ל-boolean
  pulseObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  changeToEnglish() {
    this.pulseObservable.next(true); // ל-True עבור שמאל לימין (אנגלית)
  }

  changeToHebrew() {
    this.pulseObservable.next(false); // ל-False עבור ימין לשמאל (עברית)
  }


}
