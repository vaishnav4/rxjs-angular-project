import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  options = [
    { id : 1,label: 'Promise', route: '/promise' },
    { id : 2, label: 'Observables', route: '/route2' }
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    console.log("check",route)
    this.router.navigate([route]);
  }
}
