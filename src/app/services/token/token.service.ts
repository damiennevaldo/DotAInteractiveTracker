import {Injectable} from '@angular/core';
import  {CookieService} from "ngx-cookie-service";

const TOKEN_KEY : string = "ACCESS_TOKEN";

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  constructor(private cookieService:CookieService) {
  }

  getToken(): string {
    if(this.cookieService.check(TOKEN_KEY)) {
      return this.cookieService.get(TOKEN_KEY);
    }
    return null;
  }

  setToken(token: string): void {
    this.cookieService.set(TOKEN_KEY, token);
  }

}
