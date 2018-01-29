import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-message-queue",
  templateUrl: "./message-queue.component.html",
  styleUrls: ["./message-queue.component.scss"]
})
export class MessageQueueComponent implements OnInit {
  @Input() messages: any[] = [];
  constructor() {}

  ngOnInit() {}
}
