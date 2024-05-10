import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentcationService {
    formdata =new FormData();
  constructor(private http:HttpClient) { }

  signUp( name:string,email:string,password:string,password_confirmation:string):Observable<any> {
    this.formdata.append('name',name);
    this.formdata.append('email',email);
    this.formdata.append('password',password);
    this.formdata.append('password_confirmation',password_confirmation);


    return this.http.post('https://fast.alsafwa1.com/api/register',this.formdata);
  }
  signIn( email:string,password:string):Observable<any> {
    this.formdata.append('email',email);
    this.formdata.append('password',password);


    return this.http.post('https://fast.alsafwa1.com/api/login',this.formdata);
  }
  

}
