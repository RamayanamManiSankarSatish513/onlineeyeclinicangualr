import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:9090/onlineeyeclinic/login";

  getAdminLogin(username:string,password:string):Observable<boolean>
  {
    return this.httpClient.get<boolean>(`${this.baseURL}/admin/${username}/${password}`);
  }

  getDoctorLogin(username:string,password:string):Observable<boolean>
  {
    return this.httpClient.get<boolean>(`${this.baseURL}/doctor/${username}/${password}`);
  }

  getPatientLogin(username:string,password:string):Observable<boolean>
  {
    return this.httpClient.get<boolean>(`${this.baseURL}/patient/${username}/${password}`);
  }




}
