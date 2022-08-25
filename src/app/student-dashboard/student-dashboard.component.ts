import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentData } from '../../assets/studentdata';
import { ApiService } from '../lecture.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {


  formValue!: FormGroup
  modelObj: StudentData = new StudentData;
  allData: StudentData[] = [];

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      name: [''],
      roll: [''],
      class: [''],


      section:[''],
      year: [''],
      gender: [''],
      address: [''],
      guardian: ['']

    })
    this.getDa();
  }
  title = 'Studentdashboards api';

  addCar() {
    this.modelObj.id = this.formValue.value.id;
    this.modelObj.name = this.formValue.value.name;
    this.modelObj.roll = this.formValue.value.roll;
    this.modelObj.class = this.formValue.value.class;


    this.modelObj.section = this.formValue.value.section;
    this.modelObj.year = this.formValue.value.year;
    this.modelObj.gender = this.formValue.value.gender;
    this.modelObj.address = this.formValue.value.address;
    this.modelObj.guardian = this.formValue.value.guardian;
    

    this.api.postDa(this.modelObj).subscribe({
      complete: () => {
         console.log('Posted...');
        this.formValue.reset();
        this.getDa();
      }
    }
    )
  }

  getDa() {
    this.api.getDa().subscribe((res: any) => {
      this.allData = res.filter((x: any) => {
        return x.id > 0;
      });
    }
    )
  }

  deleteDa(data: any) {
    this.api.deleteDa(data.id).subscribe(() => {
      this.getDa();
      /*  alert('Data Deleted...');*/
    }
    )
  }

  editDa(data: any) {
    this.modelObj.id = data.id;
    this.formValue.controls["id"].setValue(data.id);
    this.formValue.controls["name"].setValue(data.name);
    this.formValue.controls["roll"].setValue(data.roll);
    this.formValue.controls["class"].setValue(data.class);

    this.formValue.controls["section"].setValue(data.section);
    this.formValue.controls["year"].setValue(data.year);
    this.formValue.controls["gender"].setValue(data.gender);
    this.formValue.controls["address"].setValue(data.address);
    this.formValue.controls["guardian"].setValue(data.guardian);




  }

  updateDa() {
    /* alert('before form values Updating');*/
    this.modelObj.id = this.formValue.value.id;
    this.modelObj.name = this.formValue.value.name;
    this.modelObj.roll = this.formValue.value.roll;
    this.modelObj.class = this.formValue.value.class;


    this.modelObj.section = this.formValue.value.section;
    this.modelObj.year = this.formValue.value.year;
    this.modelObj.gender = this.formValue.value.gender;
    this.modelObj.address = this.formValue.value.address;
    this.modelObj.guardian= this.formValue.value.guardian;

    /*alert('after form values Updating');*/
    this.api.updateDa(this.modelObj, this.modelObj.id).subscribe({
      complete: () => {
         console.log('updated...');
        this.formValue.reset();
        this.getDa();
      },
      error: () => {
        alert('Error');
      }
    }
    )
  }
}
