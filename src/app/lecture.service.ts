import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  postData(data: any) {
    return this._http.post<any>("http://localhost:53211/api/Lectures", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getData() {
    return this._http.get<any>("http://localhost:53211/api/Lectures")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteData(id: number) {
    return this._http.delete<any>("http://localhost:53211/api/Lectures/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateData(data: any, id: number) {
    console.log('api updating');
    return this._http.put<any>("http://localhost:53211/api/Lectures/" + id, data)
      .pipe(map((res: any) => {
        console.log('api updated...');
        return res;
      }))
  }
  //getOne(id: number) {
  //  return this._http.get<any>("http://localhost:46541/api/lectures" + id)
  //    .pipe(map((res: any) => {
  //      return res;
  //    }))
  //}


  postDa(data: any) {
    return this._http.post<any>("http://localhost:53211/api/Studentdashboards", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getDa() {
    return this._http.get<any>("http://localhost:53211/api/Studentdashboards")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteDa(id: number) {
    return this._http.delete<any>("http://localhost:53211/api/Studentdashboards/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateDa(data: any, id: number) {
    console.log('api updating');
    return this._http.put<any>("http://localhost:53211/api/Studentdashboards/" + id, data)
      .pipe(map((res: any) => {
        console.log('api updated...');
        return res;
      }))
  }


  getD() {
    return this._http.get<any>("http://localhost:53211/api/Studentdashboards")
      .pipe(map((res: any) => {
        return res;
      }))
  }


  //uploadfile(data: any) {
  //  return this._http.post<any>("http://localhost:62243/api/Studentdashboards", data)
  //    .pipe(map((res: any) => {
  //      return res;
  //    }))
  //}
}


