import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
   private student = [
       {id:1 , name:"ali" , age: 22},
       {id:2 , name:"Hamza" , age: 23}
   ]

   getAllStudents(){
    return this.student
   }




}
