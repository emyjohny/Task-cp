import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }
loginForm=this.fb.group({
  email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  psw:['',[Validators.required]]
})
loginError(field){
  return(this.loginForm.get(field).touched||this.loginForm.get(field).dirty)&&this.loginForm.get(field).errors
}
  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
      const result =this.dataService.login(this.loginForm.value.email,this.loginForm.value.psw)
      .subscribe((data:any)=>{
        if (data) {
          localStorage.setItem("name",data.name)
          alert("Login successful");
          this.router.navigateByUrl("dashboard")
        }
      },(data)=>{
        alert(data.error.message);
      })
      
    }
    else{
      alert("Form is invalid")
    }
  }

}
