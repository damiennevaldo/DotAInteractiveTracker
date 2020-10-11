import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor() { }
  private token : String;
  getToken() : String  {
    return this.token;
  }

  setToken(token : String) : void {
    this.token = token;
  }
}
