import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { studentModule } from "./module/students/student.module";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AppRoutingModule } from "./app-routing.module";





@NgModule({
    declarations:[AppComponent, ObservableDemoComponent, HomeComponent, PageNotFoundComponent, TeachersComponent],
    imports:[BrowserModule,studentModule,AppRoutingModule],
    bootstrap:[AppComponent]

})
export class AppModule{
    
}