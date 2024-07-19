import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-eventprograms',
  templateUrl: './eventprograms.component.html',
  styleUrl: './eventprograms.component.css'
})
export class EventprogramsComponent implements OnInit {
  programs: any[] =[];  // Kutangaza kama hiari

  events = [
    {
      id: 1,
      name: 'Annual Function',
      programs: [
        { id: 1, image: 'https://www.eventbookings.com/wp-content/uploads/2023/08/event-ideas-for-college-students-1536x1024.webp', title: 'Song by Lalit', type: 'Play', startTime: '11:00 AM', endTime: '11:20 AM' },
        { id: 2, image: 'https://www.eventbookings.com/wp-content/uploads/2023/08/event-ideas-for-college-students-1536x1024.webp', title: 'Speech by Director', type: 'Speech', startTime: '11:30 AM', endTime: '11:50 AM' },
        // More programs...
      ]
    },
    {
      id: 2,
      name: 'Fresha Party',
      programs: [
        { id: 1, image: 'https://www.eventbookings.com/wp-content/uploads/2023/08/event-ideas-for-college-students-1536x1024.webp', title: 'Song by Lalit', type: 'Play', startTime: '11:00 AM', endTime: '11:20 AM' },
        { id: 2, image: 'https://www.eventbookings.com/wp-content/uploads/2023/08/event-ideas-for-college-students-1536x1024.webp', title: 'Speech by Director', type: 'Speech', startTime: '11:30 AM', endTime: '11:50 AM' },
        // More programs...
      ]
    },
    // More events...
  ];

  constructor(private route:ActivatedRoute ) { }

  ngOnInit():void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const event = this.events.find(event => event.id === id);
    this.programs = event ? event.programs : [];
  }
}
