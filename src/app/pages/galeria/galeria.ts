import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class GaleriaComponent {
  photos: string[] = [
    '/micasa3.jpeg',
    '/aftercambo.jpeg',
    '/auto.jpeg',
    '/primerafto.jpeg',
    '/ultimafto.jpeg',
    '/espejo.jpeg',
    '/micasa.jpeg',
    '/nosotros2.jpeg',
    '/nosotros3.jpeg',
    '/selfie.jpeg',
    '/bolichecambo.jpeg',
    '/nosotros.jpeg',
    '/ensucasa.jpeg',
    '/micasa2.jpeg',
    '/caminata.jpeg'

    // agregá todas tus fotos acá
  ];

  lightboxOpen = false;
  currentIndex = 0;

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  prevPhoto(event: Event) {
    event.stopPropagation(); // evita cerrar el lightbox al hacer clic
    this.currentIndex =
      (this.currentIndex - 1 + this.photos.length) % this.photos.length;
  }

  nextPhoto(event: Event) {
    event.stopPropagation();
    this.currentIndex =
      (this.currentIndex + 1) % this.photos.length;
  }

}
