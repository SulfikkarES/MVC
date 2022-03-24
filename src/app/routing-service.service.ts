import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {

  constructor() { }

  getcontacts():any[]
  {
    return[
      {ID: 12,Name:'Sulfy',Age:30, Dob: '10/18/1996', Gender: 'Male', CourseFee: 12500},
      {ID: 13,Name:'Sumayya',Age:25, Dob: '12/28/1994', Gender: 'FEMale', CourseFee: 32500},
      {ID: 14,Name:'Naufal',Age:32, Dob: '08/22/1995', Gender: 'FEMale', CourseFee: 6500},
      {ID: 15,Name:'Sainuuu',Age:30, Dob: '03/16/1993', Gender: 'Male', CourseFee: 81400},
      {ID: 16,Name:'Sample',Age:25, Dob: '02/25/1999', Gender: 'Male', CourseFee: 6666},
      {ID: 17,Name:'tset',Age:32, Dob: '04/21/1998', Gender: 'FEMale', CourseFee: 7500}

    ];
  }
}
export class contact
{
  constructor(ID :Number,Name: string,Age :number,Dob:string,Gender:string,CourseFee:number){
    this.ID = ID;
    this.Name = Name;
    this.Age = Age;
    this.Dob = Dob;
    this.Gender = Gender;
    this.CourseFee = CourseFee;
  }
  ID : Number;
  Name :string;
  Age:number;
  Dob: string;
  Gender : string;
  CourseFee : number;

}
