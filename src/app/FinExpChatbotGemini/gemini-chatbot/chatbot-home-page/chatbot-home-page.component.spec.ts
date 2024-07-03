import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotHomePageComponent } from './chatbot-home-page.component';

describe('ChatbotHomePageComponent', () => {
  let component: ChatbotHomePageComponent;
  let fixture: ComponentFixture<ChatbotHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatbotHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
