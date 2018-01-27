import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nine-house',
  templateUrl: './nine-house.component.html',
  styleUrls: ['./nine-house.component.scss']
})
export class NineHouseComponent implements OnInit {
  @Input() houses: any[] = []
  constructor() { }

  ngOnInit() {
  }

}
