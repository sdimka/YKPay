import {HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Cource } from './model/cource';
import { Response } from './model/response';
import { catchError } from 'rxjs/operators';


@Injectable()
export class YKPService{

    constructor(private _httpService: HttpClient){}
    private getUrl = 'http://localhost:8080/springTest_war/api/part';

    getAllParts(): Observable<Cource[]>{
        return this._httpService.get<Array<Cource>>(this.getUrl)
        .pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
    }

    addPart(part : Cource): Observable<Response> {
        if(part.id){
            return this._httpService.put<Response>(`${this.getUrl}/${part.id}`, part);
        } else {
            return this._httpService.post<Response>(this.getUrl, part);
        }
    }

    deletePart(partId: string): Observable<Cource>{
        return this._httpService.delete<Cource>(`${this.getUrl}/${partId}`)
    }
    
}