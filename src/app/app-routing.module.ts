import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { EventdetailsComponent} from './eventdetails/eventdetails.component';
import { EventprogramsComponent } from './eventprograms/eventprograms.component';
import { AddprogramComponent } from './addprogram/addprogram.component';
import { AdmistratorComponent } from './admistrator/admistrator.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ProgramsComponent } from './programs/programs.component'; 
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '',redirectTo:'/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'event/:id', component: EventdetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventsComponent },
  { path: 'programs/:id', component:EventprogramsComponent},
  { path: 'admistrator', component:AdmistratorComponent},
  { path: 'addprogram', component:AddprogramComponent},
  { path: 'addevent', component:AddeventComponent},
   { path: 'programs/:id', component: ProgramsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
