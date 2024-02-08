import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http: HttpClient) { }
  getUserDetail(){
    return this.http.get('http://localhost:9090/companydata/userdetail')

   
  }
}
