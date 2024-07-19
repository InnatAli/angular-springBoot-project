import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addprogram',
  templateUrl: './addprogram.component.html',
  styleUrls: ['./addprogram.component.css']
})
export class AddprogramComponent implements OnInit {

  title: string = '';
  selectedEvent: number | null = null;
  programType: string = '';
  startTime: string = '';
  endTime: string = '';
  participants: string = '';
  description: string = '';
  events: any[] = [];
  programTypes: string[] = ['Type1', 'Type2', 'Type3'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.http.get('http://localhost:8080/api/events')
      .subscribe((data: any) => {
        this.events = data;
      });
  }

  onSubmit() {
    const program = {
      title: this.title,
      eventId: this.selectedEvent,
      programType: this.programType,
      startTime: this.startTime,
      endTime: this.endTime,
      participants: this.participants,
      description: this.description
    };

    this.http.post('http://localhost:8080/api/programs/add', program)
      .subscribe(response => {
        console.log('Program added successfully:', response);
      }, error => {
        console.error('Error adding program:', error);
      });
  }

  onReset() {
    this.title = '';
    this.selectedEvent = null;
    this.programType = '';
    this.startTime = '';
    this.endTime = '';
    this.participants = '';
    this.description = '';
  }
}

