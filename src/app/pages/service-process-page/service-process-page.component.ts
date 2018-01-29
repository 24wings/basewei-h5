import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  HostListener
} from "@angular/core";

@Component({
  selector: "app-service-process-page",
  templateUrl: "./service-process-page.component.html",
  styleUrls: ["./service-process-page.component.scss"]
})
export class ServiceProcessPageComponent implements OnInit {
  maxTime: number = 10 * 60 * 1000;
  messages: string[] = [];
  @ViewChild("timer") timer;
  step: number = 0;
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
      title: "大堂",
      blocks: [
        {
          name: "客人",
          image: "/assets/images/fly-pig.jpg"
        }
      ]
    },
    {
      blocks: []
    },
    {
      title: "客房",
      using: true,
      active: true,
      blocks: [
        {
          name: "服务员",
          image: "/assets/images/person1.png"
        },
        {
          name: "技师2",
          image: "/assets/images/jishi2.jpg"
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
      title: "水吧",
      blocks: [
        {
          name: "果盘",
          image: "/assets/images/guopan.jpg"
        }
      ]
    }
  ];
  constructor() {}
  actions: any[] = [
    {
      do: async () => {
        // debugger;
        await new Promise(resolve =>
          setTimeout(async () => {
            this.houses[0].active = true;
            this.houses[4].active = true;
            this.houses[6].active = true;
            // this.timer.l
            this.timer.reset(7 * 60 * 1000);
            resolve(true);
          }, 500)
        );
        await this.sleep(2000);
        this.messages.push(
          "行业平均用时10分钟，邦为为您3分钟解决，打败了99%的同行管理"
        );

        await this.sleep(2000);
        this.closeAllActive();
      }
    },
    {
      do: async () => {
        this.messages = [];
        this.timer.reset(10 * 60 * 1000);
        this.timer.start();
        await this.sleep(500);
        this.houses[4].active = true;
        this.houses[6].active = true;
        await this.sleep(2000);
        let jishi2 = this.houses[4].blocks.pop();
        let jishi = this.houses[6].blocks.pop();
        this.houses[4].blocks.push(jishi);
        this.houses[6].blocks.push(jishi2);

        this.messages.push(
          "行业平均用时10分钟，邦为为您3分钟解决，打败了99%的同行管理"
        );

        await this.sleep(2000);
        this.closeAllActive();

        // this.houses[8].blocks.push(person);
      }
    },
    // 用户点击换项加项
    {
      do: async () => {
        this.messages = [];
        this.timer.reset(10 * 60 * 1000);
        this.timer.start();
        await this.sleep(500);
        this.houses[0].active = true;
        this.houses[4].active = true;
        await this.sleep(2000);

        await this.sleep(2000);
        this.houses[0].active = true;
        this.messages.push(
          "行业平均用时10分钟，邦为为您3分钟解决，打败了99%的同行管理"
        );

        await this.sleep(2000);
        this.closeAllActive();
      }
    },
    // 呼叫
    {
      do: async () => {
        this.messages = [];
        this.timer.reset(10 * 60 * 1000);
        this.timer.start();
        await this.sleep(500);
        this.houses[2].active = true;
        this.houses[4].active = true;
        this.houses[8].active = true;

        await this.sleep(2000);
        let fruit = this.houses[8].blocks.pop();
        let datang = this.houses[2].blocks.pop();
        this.houses[4].blocks.push(fruit, datang);

        await this.sleep(2000);
        this.messages.push(
          "行业平均用时10分钟，邦为为您3分钟解决，打败了99%的同行管理"
        );

        await this.sleep(2000);
        datang = this.houses[4].blocks.pop();
        fruit = this.houses[4].blocks.pop();
        this.houses[8].blocks.push(datang);
        this.houses[2].blocks.push(fruit);
        this.closeAllActive();
        // this.ho
      }
    },
    // 下钟
    {
      do: async () => {
        this.messages = [];
        this.timer.reset(10 * 60 * 1000);
        this.timer.start();
        await this.sleep(500);
        this.houses[4].active = true;
        this.houses[7].active = true;
        let jishi = this.houses[4].blocks.pop();
        let kehu = this.houses[4].blocks.pop();

        this.houses[6].blocks.push(kehu);
        await this.sleep(2000);
        this.closeAllActive();
      }
    }
  ];
  // @HostListener("click")
  // doOneAction() {
  //   let action = this.actions.shift();
  //   action.do();
  // }
  ngAfterViewInit() {
    this.timer.start();
  }
  doAction(step: number) {
    this.actions[step].do();
    this.step++;
  }
  ngOnInit() {}

  sleep(time: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  }
  closeAllActive() {
    console.log("close active");
    this.houses.forEach(house => {
      house.active = false;
    });
  }
}
