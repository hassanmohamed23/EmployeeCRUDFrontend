import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';
import { IEmployee } from 'src/app/ViewModel/iemployee';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  ListOfPerson:IEmployee[]=[];
  Message:string="";
 
  
  constructor(private EmployeeService:EmployeeService ,private route:Router ) { }


  Details(EmployeeId:number)
  {
    this.route.navigate(['employee/details',EmployeeId]);
  }
  Add()
  {
    this.route.navigate(['employee/add']);
  }
  Update(EmployeeId:number)
  {
    this.route.navigate(['employee/update',EmployeeId]);
  }
  Delete(EmployeeId:number)
  {
    console.log(EmployeeId);
    this.EmployeeService.Delete(EmployeeId).subscribe();
    alert ("Deleted SuccessFully");
   this.GetAll();
  }
  GetAll()
  {
    this.EmployeeService.GetAll().subscribe({
      next:(IResponse :IResponse)=>{
         this.ListOfPerson=IResponse.data;
         console.log( this.ListOfPerson)
      }
    });
  }
  ngOnInit(): void {

    this.GetAll();
  }

}
