import { TokenService } from './../../services/token/token.service';
import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-games-predicted',
  templateUrl: './history-games-predicted.component.html',
  styleUrls: ['./history-games-predicted.component.css']
})
export class HistoryGamesPredictedComponent implements OnInit {

  data = [];
  isLoading = false;

  constructor(private apiCalls: ApiCallsService, private token: TokenService) {  }

  async ngOnInit(): Promise<void> {
    //TODO : bonne idée mais avec ce event, nouvel appel à chaque keyPress (faire à onBlur)
    /*this.token.tokenChanged.subscribe (async value => {
      if (value === true) {
        const retour =  await this.apiCalls.getGamesPredictedPaginated(1);
        const data = retour.data;
        if (data && data.Code === 0 && data.Data) {
          this.data = data.Data;
        }
      }
    });*/
    this.isLoading = true;
    const retour =  await this.apiCalls.getGamesPredictedPaginated(1);
    this.isLoading = false;
    const data = retour.data;
    if (data && data.Code === 0 && data.Data) {
      this.data = data.Data;
    }
  }
}
