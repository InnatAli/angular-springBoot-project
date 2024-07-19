import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistratorComponent } from './admistrator.component';

describe('AdmistratorComponent', () => {
  let component: AdmistratorComponent;
  let fixture: ComponentFixture<AdmistratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmistratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmistratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
