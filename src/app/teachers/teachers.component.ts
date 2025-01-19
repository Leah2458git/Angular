import { Component } from '@angular/core';
import { APP_TEACHERS, Teacher } from '../module/students/teacher.model';

@Component({
  selector: 'teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  teachers:Teacher[]=APP_TEACHERS
}
