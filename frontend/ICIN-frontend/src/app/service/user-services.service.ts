import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../registration/subComponents/user-registration/user-registration.component';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) { }

  addUSerToDb(){
    console.log("Calling backend end point");
    //this.http.post("http://localhost:8090/register",user);
    //return this.http.get("http://localhost:8090/hello",{responseType: 'text'})
    return this.http.post("http://localhost:8090/register",
    new User(sessionStorage.getItem("firstName"),sessionStorage.getItem("lastName"),sessionStorage.getItem("mailid"),Number(sessionStorage.getItem("phonenumber")),sessionStorage.getItem("address"),sessionStorage.getItem("password")));
    
  }

  authenticateUser(){
      console.log("Verifying user");
      return this.http.post("http://localhost:8090/login",
      new User("","",sessionStorage.getItem("mailid"),null,"",sessionStorage.getItem("password")));
  }
  isUserLogin(){
    let user = sessionStorage.getItem("isAuthenticatedUser");
    return !(user===null);
  }

  getUserName(){
    return (sessionStorage.getItem("isAuthenticatedUser"));
  }
}
