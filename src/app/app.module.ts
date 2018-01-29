import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { OpenOrderPageComponent } from "./pages/open-order-page/open-order-page.component";
import { NineHouseComponent } from "./shared/nine-house/nine-house.component";
import { HouseComponent } from "./shared/house/house.component";
import { BlockComponent } from "./shared/block/block.component";
import { TimerComponent } from "./shared/timer/timer.component";
import { MessageQueueComponent } from "./shared/message-queue/message-queue.component";
import { ServiceProcessPageComponent } from "./pages/service-process-page/service-process-page.component";
import { BalancePageComponent } from "./pages/balance-page/balance-page.component";

@NgModule({
  declarations: [
    AppComponent,
    OpenOrderPageComponent,
    NineHouseComponent,
    HouseComponent,
    BlockComponent,
    TimerComponent,
    MessageQueueComponent,
    ServiceProcessPageComponent,
    BalancePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: OpenOrderPageComponent
      },
      { path: "service-process", component: ServiceProcessPageComponent },
      { path: "balance", component: BalancePageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
