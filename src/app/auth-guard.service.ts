import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }

  someCondition:boolean=true
  canActivate():boolean{
    if(this.someCondition){
      this.someCondition=false
      return true
    }
    else{
      alert("You are not permitted")
      this.someCondition=true
      return false
    }
  }
}
