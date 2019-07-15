import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IGame } from './igame';
import { Observable, throwError } from'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  private _url: string = "http://localhost:7000/api/games/";

  constructor(private http: HttpClient) { }

  getGames(): Observable<IGame[]>{
    return this.http.get<IGame[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  getGamesById(_id?:string): Observable<IGame[]>{
    console.log("The service called");
    console.log(this._url + _id)
    return this.http.get<IGame[]>(this._url + _id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
