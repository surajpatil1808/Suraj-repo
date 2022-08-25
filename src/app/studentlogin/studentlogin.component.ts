import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../lecture.service';



@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {


  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private api:ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password:['',Validators.required]
    })
  }
  login() {
    this._http.get<any>("http://localhost:3000/signupstudents")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          /*alert("login success!!");*/
          this.loginForm.reset();
          this.router.navigateByUrl("/start")
          // this.router.navigate(['start'])
        }
        else {
          alert("user not found!!");
        }
      })

  }


  //login() {
  // /* return this._http.get<any>("http://localhost:62243/api/Studentdashboards/" + data)*/
  // return this._http.get<any>("http://localhost:62243/api/Studentdashboards")
  //    .subscribe(res => {
  //      const user = res.find((a: any) => {
  //        return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password
  //      });
  //      if (user) {
  //        /*alert("Login success!!");*/
  //        this.loginForm.reset();
  //        this.router.navigateByUrl("/start")
  //        // this.router.navigate(['start'])
  //      }
  //      else {
  //        alert("user not found!!");
  //      }
  //    })

  //}
}
