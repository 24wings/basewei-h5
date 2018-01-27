import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-order-page',
  templateUrl: './open-order-page.component.html',
  styleUrls: ['./open-order-page.component.scss']
})
export class OpenOrderPageComponent implements OnInit {
  houses: any[] = [
    {
      blocks: [
        {
          name: '客人',
          image: '/assets/images/fly-pig.jpg'
        },
        {
          name: '服务员',
          image: '/assets/images/person1.png'
        }
      ]
    },
    {
      blocks: []

    },
    {
      blocks: []

    },
    {
      blocks: []

    },
    {
      blocks: []

    },
    {
      blocks: []

    },
    {
      blocks: []

    },
    {
      blocks: []

    },
    {
      blocks: []

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
