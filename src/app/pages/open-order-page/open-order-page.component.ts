import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-open-order-page",
  templateUrl: "./open-order-page.component.html",
  styleUrls: ["./open-order-page.component.scss"]
})
export class OpenOrderPageComponent implements OnInit, AfterViewInit {
  maxTime: number = 10 * 60 * 1000;
  messages: string[] = [];
  @ViewChild("timer") timer;
  houses: {
    title?: string;
    active?: boolean;
    using?: boolean;
    blocks: { name: string; image: string }[];
  }[] = [
    {
      active: false,
      title: "前台",
      blocks: []
    },
    {
      blocks: []
    },
    {
      title: "水吧",
      blocks: [
        {
          name: "果盘",
          image: "/assets/images/guopan.jpg"
        }
      ]
    },
    {
      blocks: []
    },
    {
      title: "大厅",
      blocks: [
        {
          name: "客人",
          image: "/assets/images/fly-pig.jpg"
        },
        {
          name: "服务员",
          image: "/assets/images/person1.png"
        }
      ]
    },
    {
      blocks: []
    },
    {
      title: "钟房",
      blocks: [
        {
          name: "技师",
          image: "/assets/images/jishi.jpg"
        }
      ]
    },
    {
      blocks: []
    },
    {
      using: false,
      active: false,
      title: "客房",
      blocks: []
    }
  ];
  constructor() {}
  actions: any[] = [
    {
      do: async () => {
        let person = this.houses[4].blocks.pop();
        let fruit = this.houses[2].blocks.pop();

        // debugger;
        await new Promise(resolve =>
          setTimeout(async () => {
            this.houses[8].blocks.push(person);
            this.houses[8].blocks.push(fruit);
            this.houses[8].active = true;
            this.houses[8].using = true;
            this.houses[0].active = true;
            // this.timer.l
            this.timer.reset(7 * 60 * 1000);
            await new Promise(res => {
              this.messages.push(
                "行业开单平均用时10分钟，邦为为您3分钟解决，打败了99%的同行管理"
              );
              setTimeout(() => {
                // this.messages.pop();
              }, 3000);
            });
          }, 3000)
        );
      }
    },
    {
      do: () => {
        // let person = this.houses[0].blocks.pop();
        // this.houses[8].blocks.push(person);
      }
    }
  ];
  @HostListener("click")
  doOneAction() {
    let action = this.actions.shift();
    action.do();
  }
  ngAfterViewInit() {
    this.timer.start();
  }
  ngOnInit() {}
}
