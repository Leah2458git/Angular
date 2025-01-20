import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';


const ADMIN_ROUTES:Route[]=[
  {path:"",redirectTo:"manageStudents",pathMatch:"full"},
  {path:"manageStudents",component:ManageStudentsComponent},
  {path:"manageTeachers" , component:ManageTeachersComponent}
]

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }