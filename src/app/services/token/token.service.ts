import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

const TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  tokenChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private cookieService: CookieService) {
  }

  getToken(): string {
    if (this.cookieService.check(TOKEN_KEY)) {
      return this.cookieService.get(TOKEN_KEY);
    }
    return null;
  }

  setToken(token: string): void {
    if (token !== this.getToken()){
    this.cookieService.set(TOKEN_KEY, token);
    this.tokenChanged.next(true);
    }
  }

}
