import { Component, HostListener ,EventEmitter} from '@angular/core';
import {animation, style, animate, trigger, transition, useAnimation,AnimationEvent} from '@angular/animations';
import {fadeInOut} from '../animations/animation';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  animations: [  fadeInOut ],
})
export class TestComponent {
  isActive =false;
  @HostListener('document:click', ['$event'])
  onClick(event: Event):void  {
    this.isActive = !this.isActive;
    console.log(this.isActive)
   
}

}
