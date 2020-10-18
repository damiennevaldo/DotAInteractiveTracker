import { Component, OnInit } from '@angular/core';
// import { Date } from 'Date';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.css']
})
export class HomeBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(): string {
    return new Date().toISOString();
  }

  last_run(): string {
    return 'date of last run';
  }

}
