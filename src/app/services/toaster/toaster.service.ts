import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Toast } from './toast.model';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  list: Toast[];


  constructor() {
    this.list = [];
  }

  getMessages(): Observable<Toast[]> {
    return of(this.list);
  }

  sendMessage(content: string, style: string, delay: number = 5000): void {
    console.log('je suis là');
    const message = new Toast(content, style, delay);
    this.list.push(message);

    // Remove item after it expires
    setTimeout(() => {
      this.dismissMessage(message.timestamp);
    }, delay);
  }


  dismissMessage(timestamp: Date): void {
    const id = this.list.findIndex(x => x.timestamp == timestamp);
    this.list.splice(id, 1);
  }

}

