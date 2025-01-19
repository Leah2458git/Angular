import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const STUDENTS: Student[] = [
    { id: 1, name: "student1 from service", description: "aaa",active:true },
    { id: 2, name: "student2", description: "bbb" ,active:true},
    { id: 3, name: "student3",active:false }];

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

    getStudentsFromServer():Observable<Student[]>{
        return this._http.get<Student[]>("/api/student")
    }
    getStudentsByDone(active:boolean):Observable<Student[]>{
        return this._http.get<Student[]>("/api/student/?active="+active)
    }
    SaveAllStudents(students:Student[]):Observable<boolean>{
        return this._http.post<boolean>("/api/student",students)
    }

    constructor(private _http:HttpClient){
    }
}