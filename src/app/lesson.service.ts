import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Lesson } from './lesson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LessonService {
  url = 'http://localhost:8080/lesson/';
  
constructor(
    private http: HttpClient) { }

  getLessons( languages:any, userName:any): Observable<Lesson[]> {
    return this.http.get(this.url+languages+'?userName='+userName, {
    }).pipe(
      map((res: any) => {
        return res; 
      })
    );
  }
}
