import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Address } from '../address'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private basUrl = "http://localhost:8080/api"

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  findIpGeoLocationData(ip: string): Observable<Address> {
    return this.httpClient
      .get<Address>(`${this.basUrl}/address/${ip}`)
      .pipe(catchError(this.errorHandler));
  }

  sendResultsViaEmail(email: string, address: Address): Observable<Object> {
    return this.httpClient
      .post(`${this.basUrl}/send-results-via-email/${email}`, address)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.message; // `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}