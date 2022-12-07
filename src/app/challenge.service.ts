import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Challenge } from './challenge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChallengeService {
  url = 'http://localhost:8080/challenge/';
  urlForLesson = 'http://localhost:8080/challengesForLesson/';
constructor(
    private http: HttpClient) { }

  getChallenges( ): Observable<Challenge[]> {
    return this.http.get(this.url, {
    }).pipe(
      map((res: any) => {
        return res; 
      })
    );
  }

  getChallengesForLessonId(s: any) : Observable<Challenge[]> {
    return this.http.get(this.urlForLesson+s, {
    }).pipe(
      map((res: any) => {
        return res; 
      })
    );
  }
}
