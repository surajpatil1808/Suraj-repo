import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentData } from '../../assets/studentdata';
import { ApiService } from '../lecture.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
      guardian: ['']

    })
    this.getD();
        
    }
  getD() {
    this.api.getDa().subscribe((res: any) => {
      this.allData = res.filter((x: any) => {
        return x.id > 0;
      });
    }
    )
  }


}
