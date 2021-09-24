import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  onScroll: boolean = false

  constructor() {}

  ngOnInit(): void {
    window.addEventListener("scroll", this.listenScrollEvent)
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? this.onScroll = true : this.onScroll = false;
  }
}
