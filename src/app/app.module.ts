import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/PageLayout/header/header.component';
import { FooterComponent } from './Components/PageLayout/footer/footer.component';
import { AddEmployeeComponent } from './Components/PersonCompontents/add-employee/add-employee.component';
import { EmployeedetialsComponent} from './Components/PersonCompontents/employeedetials/employeedetials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './Components/PersonCompontents/update-employee/update-employee.component';
import { EmployeeComponent} from './Components/PersonCompontents/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeedetialsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
