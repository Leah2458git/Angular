export class Student{
    id!:number ;
    name!:string;
    description?:string;
    done?:boolean
    
    constructor(name:string){
        this.name=name
    }
}
