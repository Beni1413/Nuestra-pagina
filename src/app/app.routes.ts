import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { HistoriaComponent } from './pages/historia/historia';
import { GaleriaComponent } from './pages/galeria/galeria';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', redirectTo: '/home' }
];
