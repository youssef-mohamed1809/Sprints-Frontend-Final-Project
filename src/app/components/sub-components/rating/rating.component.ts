import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  constructor() {}

  ngOnInit(): void {}

  getRatingCount(i: number): string {
    if (this.rating - i >= 0) return 'fa fa-star text-primary mr-1';
    if (this.rating - i >= -0.5) return 'fa fa-star-half-alt text-primary mr-1';
    return 'far fa-star text-primary mr-1';
  }
}
