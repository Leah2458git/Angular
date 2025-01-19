export class Student{
    id!:number ;
    name!:string;
    description?:string;
    active!:boolean;
    grade?:Grade;
    teacherId?:number;
    
    constructor(name:string){
        this.id=0
        this.name=name
    }
}

export enum Grade{
    First=1,
    Second=2,
    Third=3,
    Fourth=4,
    Fifth=5,
    sixth=6,
    seventh=7,
    eighth=8
}