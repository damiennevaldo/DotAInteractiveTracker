import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-games-predicted',
  templateUrl: './history-games-predicted.component.html',
  styleUrls: ['./history-games-predicted.component.css']
})
export class HistoryGamesPredictedComponent implements OnInit {

  data;

  constructor(private apiCalls: ApiCallsService) {  }

  async ngOnInit(): Promise<void> {
    const retour =  await this.apiCalls.getListroutes();
    console.log(JSON.parse(JSON.stringify(retour)));
    this.test();
  }

  test(): void {
    console.log('dans test');
    this.data = [
      {
          MatchID: 5662058221,
          ModelName: 'main_classifier',
          Predict: 0,
          PredictName: 'radiant_team',
          PredictProba: 0.58,
          InsertedDate: '2020-10-18T17:27:00.65Z'
      },
      {
          MatchID: 5661944699,
          ModelName: 'main_classifier',
          Predict: 0,
          PredictName: 'dire_team',
          PredictProba: 0.65,
          InsertedDate: '2020-10-18T17:27:00.65Z'
      }
    ]
  }
}
