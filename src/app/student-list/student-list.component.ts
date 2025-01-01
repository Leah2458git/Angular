import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

    students:Student[]=this._studentService.getStudents()
    
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

    saveStudentToList(studentToSave:Student){
      if(studentToSave.id==0){
        studentToSave.id=this.students.length+1;
        this.students.push(studentToSave)
    }
      else{
        let studentToUpdate=this.students.filter(x=>x.id==studentToSave.id)[0];
        let index=this.students.indexOf(studentToUpdate);
        this.students[index]=studentToSave;
      }
      this.selectedStudent=null as any;
    }

    constructor(private _studentService:StudentService){
      this._studentService.getStudentsSlowly().then((studentList)=>{
        console.log(studentList)
        // this.students=studentList;
      })
    }
}
