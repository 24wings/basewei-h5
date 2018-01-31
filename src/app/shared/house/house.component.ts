import { Component, OnInit, Input } from "@angular/core";

export enum HouseState {
  Acitve,
  Busy
}
@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.scss"]
})
export class HouseComponent implements OnInit {
  HouseState = HouseState;
  state: HouseState = HouseState.Acitve;
  @Input() house;
  // @Input() title: string = "大厅";
  constructor() {}

  ngOnInit() {}
  logBlock(block) {
    console.log(block);
  }
}
