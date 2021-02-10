import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NutriBbService {

  url: string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public createProfile(data) {
    return this.http.post(this.url + "parents", data);
  }

  public getAllFood(){
    return this.http.get(this.url + "foods");
  }
}
