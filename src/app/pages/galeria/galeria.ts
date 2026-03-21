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
    'assets/fotos/micasa3.jpeg',
    'assets/fotos/aftercambo.jpeg',
    'assets/fotos/auto.jpeg',
    'assets/fotos/primerafto.jpeg',
    'assets/fotos/ultimafto.jpeg',
    'assets/fotos/espejo.jpeg',
    'assets/fotos/micasa.jpeg',
    'assets/fotos/nosotros2.jpeg',
    'assets/fotos/nosotros3.jpeg',
    'assets/fotos/selfie.jpeg',
    'assets/fotos/bolichecambo.jpeg',
    'assets/fotos/nosotros.jpeg',
    'assets/fotos/ensucasa.jpeg',
    'assets/fotos/micasa2.jpeg',
    'assets/fotos/caminata.jpeg'

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
