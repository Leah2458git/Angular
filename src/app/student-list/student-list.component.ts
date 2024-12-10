import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

    students:Student[]=[{id:1,name:"student1"},{id:2,name:"student2"},{id:3,name:"student3"}]
    deleteStudent(student:Student){
      let indexToDelete=this.students.indexOf(student);
      this.students.splice(indexToDelete,1);
    }
}
