import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  menuOpen = signal(false);
  toggle(){ this.menuOpen.update(v => !v); }
  close(){ this.menuOpen.set(false); }
}
