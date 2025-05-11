import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';
import { IEmployee } from 'src/app/ViewModel/iemployee';
import { IResponse } from 'src/app/ViewModel/iresponse';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit {
  Employee:IEmployee ={}as IEmployee;
  constructor(private EmployeeService:EmployeeService,private Router:Router) { }
 
  AddPerson()
  {
     this.EmployeeService.Add(this.Employee).subscribe({
       next:(Response:IResponse)=>{
          alert(Response.message);
          this.Router.navigate(['/employee']);
         
       }
     });
    
  }
  ngOnInit(): void {
  }

}
