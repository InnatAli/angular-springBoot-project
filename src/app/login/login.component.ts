import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: any = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private userAuthService: UserAuthService) {}

  login() {
    console.log('Login data:', this.loginData);  // Log loginData to check its values

    // Check if the email contains 'admin', this is a simple heuristic, adjust as needed
    if (this.loginData.email.includes('admin')) {
      this.userAuthService.adminLogin(this.loginData).subscribe(
        response => {
          console.log('Admin login successful!', response);  // Log successful response
          
            this.router.navigate(['/admistrator']);  // Redirect to HomeComponent
          
        },
        error => {
          console.error('Error logging in', error);  // Log error response
          if (error.status === 401) {
            alert("Invalid email or password!");  // Handle 401 Unauthorized
          } else {
            alert("An error occurred. Please try again later.");  // Handle other errors
          }
        }
      );
    } else {
      this.userAuthService.login(this.loginData).subscribe(
        response => {
          console.log('User login successful!', response);  // Log successful response
          alert("User login successful!");
          this.router.navigate(['/home']);  // Redirect to HomeComponent
        },
        error => {
          console.error('Error logging in', error);  // Log error response
          if (error.status === 401) {
            alert("Invalid email or password!");  // Handle 401 Unauthorized
          } else {
            alert("An error occurred. Please try again later.");  // Handle other errors
          }
        }
      );
    }
    
  }
}
