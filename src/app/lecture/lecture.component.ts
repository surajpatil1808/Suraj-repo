import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LectureData } from '../../assets/lecture';
import { ApiService } from '../lecture.service';
import { Router } from '@angular/router';
/*import { UploadService } from './upload.service';*/

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  formValue!: FormGroup
  modelObj: LectureData = new LectureData;
  allData: LectureData[] = [];


  constructor(private formBuilder: FormBuilder, private api: ApiService, private route:Router) { }

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
  deleteData(data: any) {
    this.api.deleteData(data.id).subscribe(() => {
      this.getData();
      alert('Data Deleted...');
    }
    )
  }
  editData(data: any) {
    this.modelObj.id = data.id;
    this.formValue.controls["id"].setValue(data.id);
    this.formValue.controls["lectureName"].setValue(data.lectureName);
    this.formValue.controls["facultyName"].setValue(data.facultyName);
    this.formValue.controls["time"].setValue(data.time);
    this.formValue.controls["description"].setValue(data.description);
    this.formValue.controls["image"].setValue(data.image);
  }
  updateData() {
    alert('before form values Updating');
    this.modelObj.id = this.formValue.value.id;
    this.modelObj.lectureName = this.formValue.value.lectureName;
    this.modelObj.facultyName = this.formValue.value.facultyName;
    this.modelObj.time = this.formValue.value.time;
    this.modelObj.description = this.formValue.value.description;
    this.modelObj.image = this.formValue.value.image;
    alert('after form values Updating');
    this.api.updateData(this.modelObj, this.modelObj.id).subscribe({
      complete: () => {
        console.log('Updated...');
        this.formValue.reset();
        this.getData();
      },
      error: () => {
        alert('Error');
      }
    }
    )
  }

viewStudents(){
  this.route.navigateByUrl("/student-dashboard");

   


}

  //onSelectedFile(event) {
  //  if (event.target.files.length > 0) {
  //    const file = event.target.files[0];
  //    this.modelObj.image = this.formValue.value.file;

  //    this.api.postData(this.modelObj).subscribe({
  //      complete: () => {
  //        console.log('Posted...');
  //        this.formValue.reset();
  //        this.getData();
  //      }
  //    }
  //    )
  //  }

  //}

  //onFilechange(event: any) {
  //  console.log(event.target.files[0])
  //  this.file =event.target.files[0]
  //}

  //uploadfile() {
  //  if (this.file) {
  //    this.api.uploadfile(this.file).subscribe(resp => {
  //      alert("uploaded")

  //    })
  //  }
  //  else {
  //    alert("please select a file first")
  //  }
  //}


}
