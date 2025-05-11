import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetialsComponent } from './employeedetials.component';

describe('PersondetialsComponent', () => {
  let component: EmployeedetialsComponent;
  let fixture: ComponentFixture<EmployeedetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedetialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
