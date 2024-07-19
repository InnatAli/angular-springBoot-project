import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  eventId: number | null = null;
  programs: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    // Get event ID from route parameters
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch programs for the event
    if (this.eventId) {
      this.http.get(`http://localhost:8080/api/programs/${this.eventId}`)
        .subscribe((data: any) => {
          this.programs = data;
        }, error => {
          console.error('Error fetching programs', error);
        });
    }
  }
}
