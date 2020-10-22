import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

const MS_IN_A_DAY = 86400000;

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.css']
})
export class HomeBarComponent implements OnInit {

  public now: Date = new Date();
  public lastRunDate: Date;
  public isMoreThanADay = false;

  constructor(private apiCalls: ApiCallsService) {
    setInterval(() => {
      this.now = new Date();

      if (this.lastRunDate){
        this.isMoreThanADay = (this.now.getTime() - this.lastRunDate.getTime() > MS_IN_A_DAY);
      }
    }, 1);
  }

  async ngOnInit(): Promise<void> {
    const promise$ =  await this.apiCalls.getLastRun();
    console.dir(promise$);
    const data = promise$.data;
    if (data && data.Code === 0 && data.Data) {
      const date = new Date(data.Data.InsertedDate);
      const timeZoneDifference = (date.getTimezoneOffset() / 60) * -1; // convert to positive value.
      date.setTime(date.getTime() - (timeZoneDifference * 60) * 60 * 1000);
      this.lastRunDate = date;
    }
  }
}
