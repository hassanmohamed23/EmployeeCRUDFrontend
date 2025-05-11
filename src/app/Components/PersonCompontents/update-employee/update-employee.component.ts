import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/EmployeeService/employee.service';
import { IEmployee } from 'src/app/ViewModel/iemployee';
import { IResponse } from 'src/app/ViewModel/iresponse';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.sass']
})
export class UpdateEmployeeComponent implements OnInit {
  EmployeeID:number =0;
  Employee:any;
  constructor(private EmployeeService:EmployeeService,private Router:Router, private activatedRouter:ActivatedRoute) { }

  UpdatePerson()
  {
    this.EmployeeService.Edit(this.Employee).subscribe({
      next:(IResponse:IResponse)=>{
          alert(IResponse.message);
          this.Router.navigate(['/employee']);      
        }
    })
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.EmployeeID=Number(params.get("pID"));
     console.log( this.EmployeeID);
    });
    this.EmployeeService.GetById( this.EmployeeID).subscribe({
      next:(IResponse:IResponse)=>{
       this.Employee=IResponse.data;
      }
    });
  }

}
