import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FlashCard } from './flash';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlashService {
constructor(
    private http: HttpClient) { }
    private flashUrl = "https://8080-d95dfcaf-44ed-471b-a12f-241cff47b051.cs-europe-west1-iuzs.cloudshell.dev/flashCards/findByCategory/Unit1?key=AIzaSyCmqP1_AWtMkgagABCOP7z_ZMeeOa2K4Xg";

      getCards(): Observable<FlashCard[]> {
        return this.http.get<FlashCard[]>(this.flashUrl)//, { headers: new HttpHeaders().append("API_KEY", "AIzaSyCmqP1_AWtMkgagABCOP7z_ZMeeOa2K4Xg").append("Access-Control-Allow-Origin","*")}
        .pipe(
          tap(_ => console.log('fetched flashcards')),
          catchError(this.handleError<FlashCard[]>('getCards', [])) 
        );
      }

      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

    }