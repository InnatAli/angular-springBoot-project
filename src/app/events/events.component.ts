import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit  {
 // events = [
  //  { id: 1, name: 'Annual Function', image: 'https://www.eventbookings.com/wp-content/uploads/2023/08/event-ideas-for-college-students-1536x1024.webp' },
   // { id: 2, name: 'Freshers Party', image: 'https://www.eventbookings.com/wp-content/uploads/2023/08/event-ideas-for-college-students-1536x1024.webp' },
   // { id: 3, name: 'Job Seminar', image: 'https://www.eventbookings.com/wp-content/uploads/2023/08/event-ideas-for-college-students-1536x1024.webp' }
 // ];

  events: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http.get<any[]>('http://localhost:8080/api/events')  // This URL should match your backend endpoint
      .subscribe(response => {
        this.events = response;
      }, error => {
        console.error('Error loading events', error);
      });
  }
  fetchEvents() {
    this.http.get<any[]>('http://localhost:8080/api/events')
      .subscribe(data => {
        this.events = data;
        console.log('Events fetched successfully:', this.events); // Angalia hapa
      }, error => {
        console.error('Error fetching events', error);
      });
  }
  
}
