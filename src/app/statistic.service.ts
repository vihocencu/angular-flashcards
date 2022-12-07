import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Statistic } from './statistic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StatisticService {
  url = 'http://localhost:8080/statistic/';
  saveUrl = 'http://localhost:8080/statistic/save?';
constructor(
    private http: HttpClient) { }

  getStatistics( ): Observable<Statistic[]> {

    return this.http.get(this.url, {
    }).pipe(
      map((res: any) => {
        return res; 
      })
    );
  }

  saveStatistics(userName:string,challenge_id:string,richtig:string,hint:string,question:string,answer:string ): Observable<any> {
let url = this.buildUrl(userName,challenge_id,richtig,hint,question,answer);

return this.http.get(url, {
}).pipe(
  map((res: any) => {
    return res; 
  })
);
  }

  buildUrl(userName:string,challenge_id:string,richtig:string,hint:string,question:string,answer:string):string {
    let result : string;
    result = this.saveUrl + 'userName=' +userName + '&challenge_id=' + challenge_id + '&correct='+ richtig + '&hint=' + hint + '&question=' + question + '&answer=' + answer;
    return result;
  }
}
