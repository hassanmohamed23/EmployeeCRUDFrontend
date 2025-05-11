import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';
import { IEmployee } from 'src/app/ViewModel/iemployee';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-employeedetials',
  templateUrl: './employeedetials.component.html',
  styleUrls: ['./employeedetials.component.sass']
})
export class EmployeedetialsComponent implements OnInit {
  Employee:any;
  EmployeeID:number=0;
  constructor(private EmployeeService:EmployeeService ,private Router:Router,private activatedRouter:ActivatedRoute ) { }
  Update()
  {
    this.Router.navigate(['employee/update', this.EmployeeID])
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.EmployeeID=Number(params.get("pID"));
    });
    this.EmployeeService.GetById(this.EmployeeID).subscribe({
      next:(IResponse:IResponse)=>{
            this.Employee=IResponse.data;
      }
    }); 
  }

}
