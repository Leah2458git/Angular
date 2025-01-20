import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageTeachersComponent } from './manage-teachers/manage-teachers.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    ManageStudentsComponent,
    ManageTeachersComponent
  ],
  imports: [
    CommonModule,AdminRoutingModule
  ]
})
export class AdminModule { }
