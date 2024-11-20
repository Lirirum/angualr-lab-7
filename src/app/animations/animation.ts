import { trigger, style, animate, transition, animation,state } from '@angular/animations';



export const fadeInOut = trigger('fadeInOut', [

  state('hidden', style({
    opacity: 0,
    transform: 'translateY(-100%) translateX(-50%)', 
    
  
  })),
  

  state('visible', style({
    opacity: '{{ opacity }}',  
    transform: '{{ transform }}'  
  }), { params: { opacity: 1, transform: 'translateY(0) translateX(-50%)' } }), 


  transition('hidden => visible', [
    animate('{{time}}')  
  ]),


  transition('visible => hidden', [
    animate('{{time}}')
  ])
]);
