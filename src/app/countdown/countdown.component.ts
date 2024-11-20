import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  timeRemaining: { days: number; hours: number; minutes: number; seconds: number } = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCountdown();
      this.intervalId = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDiff = newYear.getTime() - now.getTime();

    this.timeRemaining = {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDiff / (1000 * 60)) % 60),
      seconds: Math.floor((timeDiff / 1000) % 60)
    };
  }
}

