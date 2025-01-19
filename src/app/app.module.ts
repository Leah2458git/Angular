import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { studentModule } from "./module/students/student.module";

@NgModule({
    declarations:[AppComponent, ObservableDemoComponent],
    imports:[BrowserModule,studentModule],
    bootstrap:[AppComponent]

})
export class AppModule{
    
}