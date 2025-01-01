import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Grade, Student } from '../student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher ,APP_TEACHERS} from '../teacher.mode';

@Component({
  selector: 'student-list-form-md',
  templateUrl: './student-list-form-md.component.html',
  styleUrls: ['./student-list-form-md.component.scss']
})
export class StudentListFormMdComponent {
 
  private _student?:Student;
  grade=Grade

  studentForm!:FormGroup;

  teacherList:Teacher[]=APP_TEACHERS;

  public get student():Student | undefined{
    return this._student
  }

  @Input()
  public set student(value:Student | undefined){
    this._student=value
    if(this.student!=undefined){
      this.studentForm=new FormGroup({
        "name":new FormControl(this.student.name,[Validators.required,Validators.minLength(3)]),
        "description":new FormControl(this.student.description,Validators.required),
        "id":new FormControl(this.student.id),
        "grade":new FormControl(this.student.grade,Validators.required),
        "teacherId":new FormControl(this.student.teacherId)
      })
    }
    
  }

  @Output()
  onSaveStudent:EventEmitter<Student>=new EventEmitter();

  
  saveNewStudent(){
    this.student=this.studentForm.value
    this.onSaveStudent.emit(this.student)
  }
  
}
