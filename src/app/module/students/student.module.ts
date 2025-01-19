import { NgModule } from "@angular/core";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentListFormMdComponent } from "./student-list-form-md/student-list-form-md.component";
import { StudentService } from "./student.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[StudentListComponent, StudentDetailsComponent, StudentListFormMdComponent],
    imports:[CommonModule,ReactiveFormsModule, HttpClientModule],
    providers:[StudentService],
    exports:[StudentListComponent]

    
})
export class studentModule{

}