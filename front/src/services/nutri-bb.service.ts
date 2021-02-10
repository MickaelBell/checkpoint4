import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutriBbService {

  url: string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public createProfile(data) {
    return this.http.post(this.url + "parents", data);
  }

  public addFood(data) {
    return this.http.post(this.url + "foods", data);
  }

  public deleteFood(id : string): Observable<any> {
    const myUrl : string = this.url + "foods/" + id;
    return this.http.delete(myUrl);
  }

  public getAllParent(): Observable<any>{
    return this.http.get(this.url + "parents");
  }

  public getParentById(id : string): Observable<any> {
    const myUrl : string = this.url + "parents/" + id;
    return this.http.get(myUrl);
  }

  public getAllFood(): Observable<any>{
    return this.http.get(this.url + "foods");
  }
}
