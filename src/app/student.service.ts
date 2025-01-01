import { Injectable } from "@angular/core";
import { Student } from "./student.model";

const STUDENTS: Student[] = [
    { id: 1, name: "student1 from service", description: "aaa" },
    { id: 2, name: "student2", description: "bbb" },
    { id: 3, name: "student3" }];

@Injectable()
export class StudentService {
    

    getStudents(): Student[] {
        return STUDENTS
    }

    getStudentsSlowly(): Promise<Student[]> {
        return new Promise((res, rej) => {
            setTimeout(()=>{
                res(STUDENTS)
            },(3000))
            
            }
        )
    }
}