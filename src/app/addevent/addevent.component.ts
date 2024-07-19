import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']  // Changed from styleUrl to styleUrls
})
export class AddeventComponent {

  event: any = {};
  themes: string[] = ['Theme1', 'Theme2'];
  statuses: string[] = ['Status1', 'Status2'];

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<Event>('http://localhost:8080/api/events/add', this.event)
      .subscribe({
        next: response => {
          console.log('Event added successfully', response);
          alert('Successfully');
        },
        error: error => {
          console.error('Error adding event', error);
        }
      });
  }

  onReset() {
    this.event = {};
  }
}
