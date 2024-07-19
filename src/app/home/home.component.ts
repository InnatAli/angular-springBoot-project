import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}

  onLogin() {
    // Add your login logic here
    alert('Login clicked');
  }

  onJoinUs() {
    // Add your join us logic here
    alert('Join Us clicked');
  }
}
