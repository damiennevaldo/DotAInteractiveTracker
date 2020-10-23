import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';

@Component({
  selector: 'app-models-score',
  templateUrl: './models-score.component.html',
  styleUrls: ['./models-score.component.css']
})
export class ModelsScoreComponent implements OnInit {

  maxLine: number = null;
  maxLineValues: number[] = [20, 50, 100, 150, 200];
  data = [];

  constructor(private apiCalls: ApiCallsService) {  }

  async ngOnInit(): Promise<void> {
    this.maxLine = 20;
    const retour =  await this.getScore(this.maxLine);
  }

  public async getScore(maxLine: number): Promise<void> {
    const retour =  await this.apiCalls.getScore(this.maxLine);
    const data = retour.data;
    if (data && data.Code === 0 && data.Data) {
      const returnMap: Map<number, number> = data.Data;
      const array = new Array().concat(returnMap);
      this.data = array;
    }
  }

}
