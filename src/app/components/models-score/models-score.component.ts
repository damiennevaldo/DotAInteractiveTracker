import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';

@Component({
  selector: 'app-models-score',
  templateUrl: './models-score.component.html',
  styleUrls: ['./models-score.component.css']
})
export class ModelsScoreComponent implements OnInit {


  data = [];

  constructor(private apiCalls: ApiCallsService) {  }

  async ngOnInit(): Promise<void> {
    const retour =  await this.apiCalls.getScore(20);
    console.dir(retour);
    const data = retour.data;
    if (data && data.Code === 0 && data.Data) {
      const newMap = new Map();
      newMap.set('score', '');
      const returnMap: Map<number, number> = data.Data;
      console.dir(returnMap);
      const array = new Array().concat(returnMap);
      this.data = array;
      /*console.dir(returnMap.keys());
      for (let key of returnMap.keys()) {
        const value = returnMap.get(key);
        newMap.set(key, value);
      }
      const array = new Array().concat(newMap);
      console.dir(array);*/
    }
  }

}
