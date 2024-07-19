import { Component } from '@angular/core';

@Component({
  selector: 'app-admistrator',
  templateUrl: './admistrator.component.html',
  styleUrl: './admistrator.component.css'
})
export class AdmistratorComponent {
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  addNewEvent() {
    console.log("Add New Event clicked");
  }

  addEventProgram() {
    console.log("Add Event Program clicked");
  }

  addProgramType() {
    console.log("Add Program Type clicked");
  }

  addNewTheme() {
    console.log("Add New Theme clicked");
  }

  addUser() {
    console.log("Add User clicked");
  }

  eventReport() {
    console.log("Event Report clicked");
  }

}
