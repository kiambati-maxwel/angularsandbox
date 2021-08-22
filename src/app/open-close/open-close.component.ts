import { Component, OnInit } from '@angular/core';
import { fadeAnimation, listAnimation, popFade } from '../app.animations';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// @ts-ignore
@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: '#c6ecff',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
    fadeAnimation,
    listAnimation,
    popFade,
  ],
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  isVisible = true;
  toggle(): void {
    this.isOpen = !this.isOpen;
    this.isVisible = !this.isVisible;
  }
  constructor() {}

  items = ['dog', 'cat', 'elephant', 'rhino', 'eagle'];
  ngOnInit(): void {}
}
