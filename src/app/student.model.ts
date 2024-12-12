export class Student{
    id!:number ;
    name!:string;
    description?:string;
    
    constructor(name:string){
        this.name=name
    }
}
