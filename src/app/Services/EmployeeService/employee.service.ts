import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/ViewModel/iemployee';
import { IResponse } from 'src/app/ViewModel/iresponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  constructor(private httpservice:HttpClient) { }
   
  //Get All Person
  GetAll():Observable<IResponse>
  {
    return this.httpservice.get<IResponse>(`${environment.URLAPI}/api/Employee/GetAll`);
  }
   //Get Employee By ID
   GetById(EmployeeId:number):Observable<IResponse>
   {
     return this.httpservice.get<IResponse>(`${environment.URLAPI}/api/Employee/GetById/${EmployeeId}`);
   }
    //Add Employee
  Add(Employee:IEmployee):Observable<IResponse>
  {
    
    return this.httpservice.post<IResponse>(`${environment.URLAPI}/api/Employee/Add`,Employee);
  }
    //Edit Employee
  Edit(Employee:IEmployee):Observable<IResponse>
  {
    
    return this.httpservice.post<IResponse>(`${environment.URLAPI}/api/Employee/Update`,Employee);
  }
  //Delete Employee
  Delete(EmployeeId:number):Observable<IResponse>
  {
    return this.httpservice.delete<IResponse>(`${environment.URLAPI}/api/Employee/Delete/${EmployeeId}`);
  }

}
