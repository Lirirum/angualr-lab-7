import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  constructor(private router: Router) {}

  goToSecond() {
    this.router.navigate(['/second'], {
      queryParams: { name: 'Dio', age: 200 }, 
    });
  }
}
