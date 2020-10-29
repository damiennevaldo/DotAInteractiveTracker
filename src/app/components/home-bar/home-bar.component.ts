import { TokenService } from 'src/app/services/token/token.service';
import { ApiCallsService } from './../../services/api-calls/api-calls.service';
import { Component, OnInit } from '@angular/core';

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
  isLoading = false;

  constructor(private apiCalls: ApiCallsService, private token: TokenService) {
    setInterval(() => {
      this.now = new Date();

      if (this.lastRunDate){
        this.isMoreThanADay = (this.now.getTime() - this.lastRunDate.getTime() > MS_IN_A_DAY);
      }
    }, 1);
  }

  ngOnInit(): void {
    this.token.tokenChanged.subscribe (async value => {
      if (value === true) {
        this.callLastRun();
      }
    });
    this.callLastRun();

  }

  private async callLastRun(): Promise<void> {
    this.lastRunDate = null;
    this.isLoading = true;
    const promise$ =  await this.apiCalls.getLastRun();
    this.isLoading = false;
    const data = promise$.data;
    if (data && data.Code === 0 && data.Data) {
      const date = new Date(data.Data.InsertedDate);
      const timeZoneDifference = (date.getTimezoneOffset() / 60) * -1; // convert to positive value.
      date.setTime(date.getTime() - (timeZoneDifference * 60) * 60 * 1000);
      this.lastRunDate = date;
    }
  }
}
