import { Component } from '@angular/core';
import {AppChildComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [AppChildComponent ],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class AppParentComponent {
  message: string = 'Привіт від батьківського компонента!';
}
