import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-games-predicted',
  templateUrl: './history-games-predicted.component.html',
  styleUrls: ['./history-games-predicted.component.css']
})
export class HistoryGamesPredictedComponent implements OnInit {

  constructor(private apiCalls: ApiCallsService) {  }

  async ngOnInit(): Promise<void> {
    const retour =  await this.apiCalls.getListroutes();
    console.dir(JSON.stringify(retour));
  }

  }
