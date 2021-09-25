import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ top: '-100px', opacity: 1 }),
        animate('.3s ease', style({ top: 0, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ top: 0, opacity: 1 }),
        animate('.3s ease', style({ top: '-1000px', opacity: 1 })),
      ]),
    ]),
  ],
})
export class NavComponent implements OnInit {
  onScroll: boolean = false;
  isOpenNavOverlay: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  openCloseNavOverlay(): void {
    this.isOpenNavOverlay = !this.isOpenNavOverlay;
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? (this.onScroll = true) : (this.onScroll = false);
  };
}
