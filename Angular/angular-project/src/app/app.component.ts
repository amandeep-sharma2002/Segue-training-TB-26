import { Component, OnInit,   } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Employee} from './employee.model';
import { emp_data } from './data';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employee: Employee;
  employees:Employee[];
  devCount: number;
  salesCount: number;
  adminCount: number;

  ngOnInit(){
     this.employees =emp_data;
     this.computeStat();
  }

  computeStat(){
    this.devCount = this.employees.filter(e=> e.department =='development').length; //[e1];
    this.salesCount = this.employees.filter(e=> e.department =='sales').length; //[e2];
    this.adminCount = this.employees.filter(e=> e.department =='admin').length; //[e3];
  }

  onFormSubmit(employeeForm:NgForm){
      let nameVal = employeeForm.value.name;
      let salaryVal = employeeForm.value.salary;
      let departmentVal = employeeForm.value.department;
      /* Attach values to employee Object */
       this.employee = {
        name : nameVal,
        salary : salaryVal,
        department : departmentVal
       }
       /* Add employee object in array  */
       this.employees.push(this.employee);
       this.computeStat();
  }
}
