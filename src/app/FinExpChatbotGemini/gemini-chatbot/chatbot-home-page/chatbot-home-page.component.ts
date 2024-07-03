import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiServicesService } from '../../gemini-services.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chatbot-home-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chatbot-home-page.component.html',
  styleUrl: './chatbot-home-page.component.scss'
})
export class ChatbotHomePageComponent {
  promt: string = "";
  public showloading: boolean = false;
  geminiService: GeminiServicesService = inject(GeminiServicesService);
  chatHistory: any[] = [];
  constructor() {
    this.geminiService.getMessageHistory().subscribe((res) => {
      let json = {
        type: 'User',
        message: res.message
      }
      if (res) {
        if (res.type == 'Bot') {
          this.showloading = false
        }
        this.chatHistory.push(res);
      }
    }, (err) => {
      let json = {
        type: 'Bot',
        message: err
      }
      this.chatHistory.push(json);
    })
  }

  getResponse(event: any) {
    this.showloading = true
    if (this.promt) {
      this.geminiService.generateText(this.promt);
    }
    this.promt = "";
  }
  onKeyPress(evt: any) {
    if (evt.keyCode == 13) {
      this.showloading = true
      if (this.promt) {
        this.geminiService.generateText(this.promt);
      }
      this.promt = "";
    }

  }


}


