import { Component, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s ease', keyframes([
          style({ opacity: .9 }),
          style({ opacity: .8 }),
          style({ opacity: .7 }),
          style({ opacity: .6 }),
          style({ opacity: .5 })
        ]))
      ]),
    ]),
  ],
})
export class AppComponent {
  innerWidth: any;
  isLoading: boolean;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.isLoading = true;
    this.showLoader();
  }

  showLoader() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
