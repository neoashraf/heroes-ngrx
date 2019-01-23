import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Hero } from "../models/hero.model";
import { BaseUrl } from "../shared/utils/constants";
import { catchError } from "rxjs/operators";

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${BaseUrl.hero}`);
  }

  getHero(id: string): Observable<Hero> {
    return this.http
      .get<Hero>(`${BaseUrl.hero}${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }
  addHero(hero: Hero): Observable<any> {
    return this.http.post<Hero>(`${BaseUrl.hero}`, hero).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(new Error(err.message));
      })
    );
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put<Hero>(`${BaseUrl.hero}${hero.id}`, hero).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(new Error(err.message));
      })
    );
  }
  removeHero(id: string): Observable<any> {
    return this.http.delete<Hero>(`${BaseUrl.hero}${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(new Error(err.message));
      })
    );
  }
}
