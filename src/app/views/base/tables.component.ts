import { Component } from '@angular/core';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
    public myModal;
    public largeModal;
    public smallModal;
    public primaryModal;
    public successModal;
    public warningModal;
    public dangerModal;
    public infoModal;
    dtOptions: DataTables.Settings = {};
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true
      };
    }
  //Sample Employee Master json data
  emp_master : [{
      emp_code: string,
      emp_type : string,
      fname : string,
      mname : string,
     lname : string,
      designation : string,
      level : string,
      department : string,
      status : number
  },{
      emp_code: string,
      emp_type : string,
      fname : string,
      mname : string,
     lname : string,
      designation : string,
      level : string,
      department : string,
      status : number
  }];
constructor() {
  this.emp_master = [{
    emp_code : "313348",
    emp_type: "Full Time Employee",
    fname : "Sriguru",
    mname : "",
    lname : "V",
    designation  : "Engineer",
    level : "L1",
    department : "Software Developement",
    status : 1
},
{
  emp_code : "313347",
  emp_type: "Full Time Employee",
  fname : "Sriguru",
  mname : "",
  lname : "V",
  designation  : "Engineer",
  level : "L1",
  department : "Silicon Developement",
  status : 1
}]
 };
}

