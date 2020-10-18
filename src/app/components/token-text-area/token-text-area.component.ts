import { TokenService } from './../../services/token/token.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-token-text-area',
  templateUrl: './token-text-area.component.html',
  styleUrls: ['./token-text-area.component.css']
})
export class TokenTextAreaComponent implements OnInit {

  token: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
   this.token = this.tokenService.getToken();
  }

  tokenChanged($event: string) {
    this.tokenService.setToken($event);
  }
}
