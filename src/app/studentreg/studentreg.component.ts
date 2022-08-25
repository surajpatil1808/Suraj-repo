import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';


@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.css']
})
export class StudentregComponent implements OnInit {
  public signupForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private customValidator: CustomvalidationService) { }



  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      id: [''],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]

    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  //registerEventHandler() {
  //  if (!this.signupForm.valid) {
  //    alert("Check whether you have filled all the details correctly");
  //  }
  //  else {
  //    alert("Registration successfull!")
  //    this.signupForm.reset();
  //    /* this.router.navigateByUrl("/start");*/
  //  }
  //}

  get signupFormControl() {
    return this.signupForm.controls;
  }

  get f() {
    return this.signupForm.controls;
  }

  signUp() {
  
      /*this._http.post<any>("http://localhost:3000/signupStudents/", this.signupForm.value).subscribe(res => {*/
      this._http.post<any>("http://localhost:3000/signupStudents/", this.signupForm.value)
        .subscribe(_res => {
          alert("success");
          this.signupForm.reset();
             this.router.navigate(['studentlogin']);


        })
     
}
}

  //onSubmit() {
  //  this.submitted = true;
  //  if (this.registerForm.valid) {
  //    alert('Form Submitted succesfully');
  //    console.table(this.registerForm.value);
  //  }
  //}
