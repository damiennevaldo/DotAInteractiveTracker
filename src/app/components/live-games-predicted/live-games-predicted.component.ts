import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-games-predicted',
  templateUrl: './live-games-predicted.component.html',
  styleUrls: ['./live-games-predicted.component.css']
})
export class LiveGamesPredictedComponent implements OnInit {

  data = [];
  isLoading = false;

  constructor(private apiCalls: ApiCallsService) {  }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    const retour =  await this.apiCalls.getGamesPredictedLive();
    this.isLoading = false;
    const data = retour.data;
    if (data && data.Code === 0 && data.Data) {
      this.data = data.Data;
    }
  }
}
