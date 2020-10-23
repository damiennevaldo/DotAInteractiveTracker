export class Toast {
  title: string;
  content: string;
  style: string;

  delay: number;
  counter: number;
  public timestamp: Date;
  public dismissed = false;

  constructor(content: string, style = 'info', delay: number = 10000) {
    this.content = content;
    this.style = style;
    this.delay = delay;
    this.timestamp = new Date();
    this.counter = 0;
    const countdown = setInterval(function(): void {
      this.counter += 50;
      if (this.counter === this.delay) {
        clearInterval(countdown);
      }
    }, 50);
  }
}
