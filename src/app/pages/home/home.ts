import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

  // fecha de inicio de noviazgo
  private startDate = new Date(2026, 0, 17); // 17 enero

  // próximo cumplemes
  private nextMonthDate: Date;

  // fecha en la que se vuelven a ver
  private meetDate = new Date(2026, 6, 4); // 4 julio 2026

  // contador cumplemes
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  // tiempo juntos
  monthsTogether = 0;
  daysTogether = 0;
  hoursTogether = 0;
  minutesTogether = 0;

  // contador reencuentro
  daysMeet = 0;
  hoursMeet = 0;
  minutesMeet = 0;
  secondsMeet = 0;

  constructor() {
    this.nextMonthDate = this.calcNextMonthDate();
    this.update();
    setInterval(() => this.update(), 1000);
  }

  private calcNextMonthDate(): Date {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = 17;

    const candidate = new Date(year, month, day);

    return (now.getDate() >= day)
      ? new Date(year, month + 1, day)
      : candidate;
  }

  private update() {
    const now = new Date();

    // ⏳ tiempo hasta próximo cumplemes
    const diff = this.nextMonthDate.getTime() - now.getTime();
    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);

    // 💖 tiempo hasta que se vuelvan a ver
    const meetDiff = this.meetDate.getTime() - now.getTime();

    if (meetDiff <= 0) {
      this.daysMeet = 0;
      this.hoursMeet = 0;
      this.minutesMeet = 0;
      this.secondsMeet = 0;
    } else {
      this.daysMeet = Math.floor(meetDiff / (1000 * 60 * 60 * 24));
      this.hoursMeet = Math.floor((meetDiff / (1000 * 60 * 60)) % 24);
      this.minutesMeet = Math.floor((meetDiff / (1000 * 60)) % 60);
      this.secondsMeet = Math.floor((meetDiff / 1000) % 60);
    }

    // 📅 tiempo juntos
    const togetherDiff = now.getTime() - this.startDate.getTime();

    this.monthsTogether =
      (now.getFullYear() - this.startDate.getFullYear()) * 12 +
      (now.getMonth() - this.startDate.getMonth());

    this.daysTogether = Math.floor(togetherDiff / (1000 * 60 * 60 * 24));
    this.hoursTogether = Math.floor(togetherDiff / (1000 * 60 * 60));
    this.minutesTogether = Math.floor(togetherDiff / (1000 * 60));
  }
}