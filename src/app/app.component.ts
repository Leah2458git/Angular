import { Component } from "@angular/core";

@Component({
    templateUrl:"app.component.html",
    selector:"app-root"
})
export class AppComponent{
    title:string="Hello from My-App"
    x:number=5

    timeCalculation() {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        if (currentHour > 5 && currentHour < 12)
          return "Good morning :)";
        if (currentHour > 11 && currentHour < 18)
          return "Good afternoon :)";
        else
          return "Good evening :)";
      }
    
}
