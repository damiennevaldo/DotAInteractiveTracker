import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit {

  data = [];
  isLoading = false;

  constructor(private apiCalls: ApiCallsService, private token: TokenService) {  }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    const retour =  await this.apiCalls.getUserStats();
    this.isLoading = false;
    const data = retour.data;
    if (data && data.Code === 0 && data.Data) {
      const returnMap: Map<number, number> = data.Data;
      const array = new Array().concat(returnMap);
      this.data = array;
    }
  }

}
