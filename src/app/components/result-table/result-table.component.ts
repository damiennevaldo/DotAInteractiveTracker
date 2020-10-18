import { KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent{

  constructor() { }

  resultData: any[];
  firstEntry: Map<string, string>;

  @Input()
  get data(): any[] { return this.resultData; }
  set data(data: any[]) {
    console.log('coucou');
    this.resultData = data;
    this.firstEntry = data[0];
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
