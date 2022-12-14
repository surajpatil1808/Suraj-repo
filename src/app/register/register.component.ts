import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  public registerForm!: FormGroup;
  submitted = false;
  

  // registerForm = new FormGroup({
  //   name:new FormControl("", Validators.required),
    // password:new FormControl("", [Validators.required, Validators.pattern(/^[]0-9a-zA-Z/), Validators.minLength(8), Validators.maxLength(20)]),
    // email:new FormControl("", [Validators.required, Validators.email]), 
    // mobile:new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    

  constructor(public router:Router,private fb: FormBuilder,private _http:HttpClient,private customValidator: CustomvalidationService) {
 }

  ngOnInit(): void {


 
     
    this.registerForm = this.fb.group({
      id: [''],
    

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // mobile:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      // username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }


  registerEventHandler(){
    if(!this.registerForm.valid){
      alert("Check whether you have filled all the details correctly");
  }
    else{
      alert("Registration successfull!")
      this.registerForm.reset();
     /* this.router.navigateByUrl("/start");*/
    }
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  get f(){
    return this.registerForm.controls;
  }
   

  //onSubmit() {
  //  this.submitted = true;
  //  if (this.registerForm.valid) {
  //    alert('Form Submitted succesfully');
  //    console.table(this.registerForm.value);
  //  }
  //}

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
    /*this._http.post<any>("http://localhost:3000/signupStudents/", this.signupForm.value).subscribe(res => {*/
    this._http.post<any>("http://localhost:3000/signupStudents/", this.registerForm.value)
      .subscribe(_res => {
        alert("success");
        this.registerForm.reset();
        /*   this.router.navigate(['studentlogin']);*/
      })
      }
  }

}
