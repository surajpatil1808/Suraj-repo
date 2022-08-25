import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { LectureData } from '../../assets/lecture';
import { ApiService } from '../lecture.service';


 
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  formValue!: FormGroup
  modelObj: LectureData = new LectureData;
  allData: LectureData[] = [];

  constructor(public router: Router, private formBuilder: FormBuilder, private api: ApiService) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      lectureName: [''],
      facultyName: [''],
      time: [''],
      description: [''],
      image: ['']
    })
    this.getData();
    
  }
  title = 'lectures api';
  addMovie() {
    this.modelObj.id = this.formValue.value.id;
    this.modelObj.lectureName = this.formValue.value.lectureName;
    this.modelObj.facultyName = this.formValue.value.facultyName;
    this.modelObj.time = this.formValue.value.time;
    this.modelObj.description = this.formValue.value.description;
    this.modelObj.image = this.formValue.value.image;

    this.api.postData(this.modelObj).subscribe({
      complete: () => {
        console.log('Posted...');
        this.formValue.reset();
        this.getData();
      }
    }
    )

  }
  getData() {
    this.api.getData().subscribe((res: any) => {
      this.allData = res.filter((x: any) => {
        return x.id > 0;
      });
    }
    )
  }
    
  






  startTestEventHandler(){
    this.router.navigateByUrl("/test/1");
  }

}
