import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OpenOrderPageComponent } from './pages/open-order-page/open-order-page.component';
import { NineHouseComponent } from './shared/nine-house/nine-house.component';
import { HouseComponent } from './shared/house/house.component';
import { BlockComponent } from './shared/block/block.component';


@NgModule({
  declarations: [
    AppComponent,
    OpenOrderPageComponent,
    NineHouseComponent,
    HouseComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: OpenOrderPageComponent,
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
