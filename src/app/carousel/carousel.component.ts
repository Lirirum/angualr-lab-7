import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent as CarouselComponentT,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent ,
  ThemeDirective
} from '@coreui/angular';





@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: [ThemeDirective, CarouselComponentT, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselControlComponent, RouterLink]
})

export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: '/fractal001.jpg'
    };
    this.slides[1] = {
      src: '/winter3.jpg'
    };
    this.slides[2] = {
      src: '../assets/images/vue.jpg'
    };
  }
}