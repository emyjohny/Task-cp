import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


const options ={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser;

  constructor(private http:HttpClient) { 
    // this.getDetails()
  }
  // saveDetails(){
  //   localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
  // if(this.currentUser){
  //   localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  // }}

  // getDetails(){
  //   if(localStorage.getItem("accountDetails")){
  //     this.accountDetails=JSON.parse(localStorage.getItem("accountDetails"));
  //   }
  //   if(localStorage.getItem("currentUser")){
  //     this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
  //   }
    

  // }

  login(email,password){
const data={
  email,
  password
}
return this.http.post(environment.apiUrl+"/login",data,options)
  }

register(firstName,lastName,mobileNumber,email,password){
  const data={
    firstName,
    lastName,
    mobileNumber,
    email,
    password
  }
  return this.http.post(environment.apiUrl+"/register",data)
}
}