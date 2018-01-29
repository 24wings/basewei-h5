import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"]
})
export class TimerComponent implements OnInit {
  @Input() maxTime: number;
  time: Date;
  private timer;
  constructor() {}

  ngOnInit() {
    this.time = new Date(this.maxTime);
  }

  start() {
    this.timer = setInterval(() => {
      this.time = new Date(this.time.getTime() - 1000);
    }, 1000);
  }
  reset(time: number) {
    clearInterval(this.timer);
    this.maxTime = time;
    this.time = new Date(this.maxTime);
    // this.start();
  }
}
