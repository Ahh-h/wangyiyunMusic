import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less']
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex: number;
  @Output() slideChange = new EventEmitter<string>();
  @ViewChild('dot', { static: true }) dotRef: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSildeChange(type: 'pre' | 'next') {
    this.slideChange.emit(type);
  }

}
