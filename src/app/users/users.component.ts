import { Component, OnInit} from '@angular/core';
import { UserAuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserAuthService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error('Error fetching users', error);
    });
  }
}
