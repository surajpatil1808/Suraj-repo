import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentData } from '../../assets/studentdata';
import { ApiService } from '../lecture.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }
    formValue!: FormGroup
    modelObj: StudentData = new StudentData;
    allData: StudentData[] = [];

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      name: [''],
      roll: [''],
      class: [''],
      section: [''],
      year: [''],
      gender: [''],
      address: [''],
      guardian:['']

    })
    this.getDa();
  }


  getDa() {
    this.api.getDa().subscribe((res: any) => {
      this.allData = res.filter((x: any) => {
        return x.id > 0;
      });
    }
    )
  }
}
