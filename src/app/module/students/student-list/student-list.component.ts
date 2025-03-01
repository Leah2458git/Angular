import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit{

    students!:Student[];//=this._studentService.getStudents()
    
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
    showStudentsByActive(active:boolean){
      this._studentService.getStudentsByDone(active).subscribe(data=>
        this.students=data
      );
    }
    SaveStudentsToServer(){
      this._studentService.SaveAllStudents(this.students).subscribe(data=>{
        if(data)
          alert("Save Success")
      });

    }

    constructor(private _studentService:StudentService,private _acr:ActivatedRoute){
      
    }
    teacherId!:number;

    ngOnInit(): void {

      this._acr.paramMap.subscribe(paramMap=>{
        if(paramMap.has("id")){
          this.teacherId=Number(paramMap.get("id"))
        }
      })

      this._studentService.getStudentsFromServer().subscribe(data=>{
        if(this.teacherId){
          this.students=data.filter(student=>student.teacherId==this.teacherId)
        }
        else
          this.students=data
        }
      )
      
      
    }
    
}
