import { TokenService } from './../../services/token/token.service';
import {Component, OnInit} from '@angular/core';


const DEFAULT_TOKEN = 'demo_token';
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
   if (!this.token) {
    this.token = DEFAULT_TOKEN;
   }
  }

  tokenBlurred($event: string): void {
    this.token = this.token.replace(/\s+/g, '');
    this.tokenService.setToken(this.token);

  }
}
