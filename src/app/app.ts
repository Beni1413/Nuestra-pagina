import { Component, signal } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('regalo-rena');
}
