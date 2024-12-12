import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent {
  @Input()
  student!:Student;

  @Output()
  onSaveNewStudent:EventEmitter<Student>=new EventEmitter();

  saveNewStudent(){
    this.onSaveNewStudent.emit(this.student)
  }
  
}
