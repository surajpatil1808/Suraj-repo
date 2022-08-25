import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instlogin',
  templateUrl: './instlogin.component.html',
  styleUrls: ['./instlogin.component.css']
})
export class InstloginComponent implements OnInit {

  public loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private _http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this._http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email ===this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        /*alert("Login success!!");*/
        this.loginForm.reset();
        this.router.navigateByUrl("/lectures")
        // this.router.navigate(['start'])
      }
      else{
        alert("user not found!!");
      }
    })
  
  }

  //login() {
  //  alert("Login success!!");
  //     this.loginForm.reset();
  //     this.router.navigateByUrl("/lectures")}
}
