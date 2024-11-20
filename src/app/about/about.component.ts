import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('animateDiv', [
      transition('inactive => active', [
        animate(
          '1s',
          keyframes([
            style({ transform: 'translateY(0) scale(1)', offset: 0}),
            style({ transform: 'translateY(100px) scale(1,2)',color:'#5e03fc', offset: 0.7,  }),
            style({ transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class AboutComponent {
  
   boxAnimate : string = 'inactive';

 

  toggleAnimation() {
    this.boxAnimate = this.boxAnimate=== 'inactive' ? 'active' : 'inactive';

  }
}
