import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventprogramsComponent } from './eventprograms.component';

describe('EventprogramsComponent', () => {
  let component: EventprogramsComponent;
  let fixture: ComponentFixture<EventprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventprogramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
