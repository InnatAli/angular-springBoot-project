import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};
  confirmPassword: string = ''; // Initialize confirmPassword

  constructor(private router: Router, private userAuthService: UserAuthService) {}

  register() {
    if (this.user.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    this.userAuthService.register(this.user).subscribe(
      response => {
        console.log('User registered successfully!', response);
        alert("Registration successful!");
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error registering user', error);
        alert("Error registering user!");
      }
    );
  }
}
