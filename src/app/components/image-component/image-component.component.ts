import { Component } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css'],
})
export class ImageComponentComponent {
  image_width: number = 300;
  firstName: string = '';

  constructor() {}

  zoomIn() {
    this.image_width *= 1.1;
  }
  zoomOut() {
    this.image_width /= 1.1;
  }
}
