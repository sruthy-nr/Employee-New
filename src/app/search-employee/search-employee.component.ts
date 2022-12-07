import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  employeecode=""
  
  searchdata:any=[]
  constructor(private api:ApiService){}
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
}
