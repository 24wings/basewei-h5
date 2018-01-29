import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.scss"]
})
export class HouseComponent implements OnInit {
  @Input() house;
  // @Input() title: string = "大厅";
  constructor() {}

  ngOnInit() {}
  logBlock(block) {
    console.log(block);
  }
}
