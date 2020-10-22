import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

const TOKEN_KEY = 'ACCESS_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  //TODO : bonne idée mais avec ce event, nouvel appel à chaque keyPress (faire à onBlur)
  //tokenChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private cookieService: CookieService) {
  }

  getToken(): string {
    if (this.cookieService.check(TOKEN_KEY)) {
      return this.cookieService.get(TOKEN_KEY);
    }
    return null;
  }

  setToken(token: string): void {
    this.cookieService.set(TOKEN_KEY, token);
    //TODO : bonne idée mais avec ce event, nouvel appel à chaque keyPress (faire à onBlur)
    //this.tokenChanged.next(true);
  }

}
