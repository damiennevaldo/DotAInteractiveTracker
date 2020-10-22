import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-games-predicted',
  templateUrl: './history-games-predicted.component.html',
  styleUrls: ['./history-games-predicted.component.css']
})
export class HistoryGamesPredictedComponent implements OnInit {

  data = [];

  constructor(private apiCalls: ApiCallsService) {  }

  async ngOnInit(): Promise<void> {
    const retour =  await this.apiCalls.getGamesPredictedPaginated(1);
    const data = retour.data;
    if (data && data.Code === 0 && data.Data) {
      this.data = data.Data;
    }
  }
}
