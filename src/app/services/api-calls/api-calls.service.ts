import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const BASE_URL : string = "https://dota-prediction.herokuapp.com/";
@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http:HttpClient) { }


  //Call to history-games-predicted
  getHistoryGames(): Observable<any> {
    return this.http.get(BASE_URL);
  }

}
