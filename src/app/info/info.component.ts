import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  animations: [
    trigger('imageAnimation', [
      state('hidden', style({
       
        opacity: 0,
        display: "none",
      })),
      state('visible', style({
        
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('500ms ease-in')
      ]),
      transition('visible => hidden', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class InfoComponent {


  isVisible = false;
 

  toggleImage() {
    this.isVisible = !this.isVisible;
  }

 
  hideImage() {
    this.isVisible = false;
  }
}
