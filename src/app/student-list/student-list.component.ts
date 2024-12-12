import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

    students:Student[]=[{id:1,name:"student1",description:"aaa"},{id:2,name:"student2",description:"bbb"},{id:3,name:"student3"}]
    
    deleteStudent(student:Student){
      let indexToDelete=this.students.indexOf(student);
      this.students.splice(indexToDelete,1);
    }
    
    selectedStudent!:Student;

    showDetails(student:Student){
      this.selectedStudent=student

    }
    showNewStudentDetails(){
      this.selectedStudent=new Student("new student name")

    }

    addNewStudentToList(studentToAdd:Student){
      this.students.push(studentToAdd)
      this.selectedStudent=null as any;
    }
}
