import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesApiService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.apiUrl);
  }

  post(object: any) {
    return this.http.post(this.apiUrl, object);
  }

  delete(id :any){
    return this.http.delete(this.apiUrl + `/${id}`);
  }
}
