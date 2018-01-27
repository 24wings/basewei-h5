import { Component, OnInit, Input, ElementRef, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() block;
  @ViewChild('imageEl') imageEl;

  constructor(public el: ElementRef) {

  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.block.offsetTop = this.el.nativeElement.y;

    this.block.offsetLeft = this.el.nativeElement.x;
    console.log(this.el.nativeElement, this.imageEl.nativeElement.x, this.imageEl.nativeElement.y);
    this.block.x = this.imageEl.nativeElement.x;
    this.block.y = this.imageEl.nativeElement.y;

  }

}
