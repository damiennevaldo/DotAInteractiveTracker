import { ToasterService } from './../../services/toaster/toaster.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  messages: any;

  constructor(private toasterService: ToasterService) { }

 ngOnInit(): void {
    this.messages = this.toasterService.getMessages();
  }

  dismiss(id): void {
    this.toasterService.dismissMessage(id);
  }
}
