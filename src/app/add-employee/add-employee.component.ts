import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeecode=""
  employeename=""
  designation=""
  salary=""
  companyname=""
  mobile=""
  username=""
  password=""
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let employee:any={
      "employeecode":this.employeecode,"employeename":this.employeename,"designation":this.designation,"salary":this.salary,"companyname":this.companyname,"mobile":this.mobile,"username":this.username,"password":this.password
    }
  console.log(employee)
  this.api.addEmployee(employee).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Successfully Added")
        this.employeecode=""
        this.employeename=""
        this.designation=""
        this.salary=""
        this.companyname=""
        this.mobile=""
        this.username=""
        this.password=""
      } 
      else {
        alert("Something went wrong")
      }
    }
  )
  }
}
