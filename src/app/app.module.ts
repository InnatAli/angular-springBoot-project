import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventsComponent } from './events/events.component';
import { EventprogramsComponent } from './eventprograms/eventprograms.component';
import { AddprogramComponent } from './addprogram/addprogram.component';
import { AddeventComponent } from './addevent/addevent.component';
import { AdmistratorComponent } from './admistrator/admistrator.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProgramsComponent } from './programs/programs.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EventdetailsComponent,
    EventprogramsComponent,
    AddprogramComponent,
    AddeventComponent,
    AdmistratorComponent,
    ProgramsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    {
      provide: 'httpOptions',
      useFactory: () => {
        return { withCredentials: true };
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
