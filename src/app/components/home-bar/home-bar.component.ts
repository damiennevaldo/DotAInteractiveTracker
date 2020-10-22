import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.css']
})
export class HomeBarComponent implements OnInit {

  public now: Date = new Date();
  public lastRunDate: Date;

  constructor(private apiCalls: ApiCallsService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  async ngOnInit(): Promise<void> {
    const promise$ =  await this.apiCalls.getLastRun();
    console.log('promise$');
    console.dir(promise$);
    const data = promise$.data;
    if (data && data.Code === 0 && data.Data) {
      this.lastRunDate= data.Data.InsertedDate;
    }
  }

  last_run(): string {
    return 'date of last run';
  }

}
