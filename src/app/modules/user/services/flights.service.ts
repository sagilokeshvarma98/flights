import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private _HTTP:HttpClient) { }

  private _URL: string = "http://localhost:4888/"

  getFlights():Observable<any[]> {
    return this._HTTP.get<any[]>(this._URL+'flights')
  }
  
}
