import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Villain } from "../models/villain.model";
import { BaseUrl } from "../shared/utils/constants";
import { catchError } from "rxjs/operators";

@Injectable()
export class VillainService {
  constructor(private http: HttpClient) {}

  getVillains(): Observable<Villain[]> {
    return this.http.get<Villain[]>(`${BaseUrl.villain}`);
  }

  getVillain(id: string): Observable<Villain> {
    return this.http
      .get<Villain>(`${BaseUrl.villain}${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(err.message)
        )
      );
  }
  addVillain(villain: Villain): Observable<any> {
    return this.http.post<Villain>(`${BaseUrl.villain}`, villain).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }
  updateVillain(villain: Villain): Observable<any> {
    return this.http
      .put<Villain>(`${BaseUrl.villain}${villain.id}`, villain)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err.message);
        })
      );
  }
  removeVillain(id: string): Observable<any> {
    return this.http.delete<Villain>(`${BaseUrl.villain}${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }
}
