import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TokenService} from "../services/token/token.service";

@Component({
  selector: 'app-token-text-area',
  templateUrl: './token-text-area.component.html',
  styleUrls: ['./token-text-area.component.css']
})
export class TokenTextAreaComponent implements OnInit {

  token:string;

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
   this.token = this.tokenService.getToken();
  }

  tokenChanged($event: string) {
    this.tokenService.setToken($event);
  }
}
