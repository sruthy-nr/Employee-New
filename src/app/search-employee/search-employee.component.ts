import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  employeecode=""
  
  searchdata:any=[]
  constructor(private api:ApiService,private route:Router){}
  readValues=()=>
  {
    let employee:any={
      "employeecode":this.employeecode
    }
  console.log(employee)
  this.api.searchEmployee(employee).subscribe(
    (response:any)=>

    {

      console.log(response)

      if(response.length==0)

      {

         alert("no data")

      }
      else{
        this.searchdata = response
      }

    }

  )
  }
  deletebuttonclick=(id:any)=>{
    let data:any={
      "id":id
    }
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {

          alert("Deleted");
          this.route.navigate(['/view'])
        } 
        else {
          alert("invalid input");
        }

      }
    )
  }
}
