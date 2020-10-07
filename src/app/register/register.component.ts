import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms' ;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }

  registerForm= this.fb.group({
    fname:['',[Validators.required]],
    lname:['',[Validators.required]],
    num:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:['',[Validators.required]],
    psw:['',[Validators.required]]
  })


  ngOnInit(): void {
  }
  getError(name) {
    return (this.registerForm.get(name).touched || this.registerForm.get(name).dirty) && this.registerForm.get(name).errors;
  }
  register(){
    if(this.registerForm.valid){
      const result=this.dataService.register(this.registerForm.value.fname,
         this.registerForm.value.lname,
        this.registerForm.value.num,
        this.registerForm.value.email,
        this.registerForm.value.psw)
        .subscribe(data=>{
          if (data) {
            alert("successfully created account.Please Log in");
            this.router.navigateByUrl("");
          }},(data)=>{
  alert(data.error.message);
  
          })
    }
    else{
      alert("form is invalid");
    }

  }
}
