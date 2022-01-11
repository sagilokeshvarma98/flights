import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private _HTTP: HttpClient) { }

  private _URL: string = "http://localhost:4888/"

  getQuotesById(id: number):Observable<any> {
    return this._HTTP.get(`${this._URL}quotes/${id}`)
  }
}
