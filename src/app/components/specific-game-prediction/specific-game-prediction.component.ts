import { ToasterService } from './../../services/toaster/toaster.service';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-specific-game-prediction',
  templateUrl: './specific-game-prediction.component.html',
  styleUrls: ['./specific-game-prediction.component.css']
})
export class SpecificGamePredictionComponent {

  matchId: number = null;
  data = [];
  isLoading = false;

  constructor(private apiCalls: ApiCallsService) { }

  public async getGamePrediction(): Promise<void> {
    this.isLoading = true;
    const retour =  await this.apiCalls.getPredict(this.matchId);
    this.isLoading = false;
    const data = retour.data;
    if (data && data.Code === 0 && data.Data) {
      const returnMap: Map<number, number> = data.Data;
      const array = new Array().concat(returnMap);
      this.data = array;
    }
  }

}
