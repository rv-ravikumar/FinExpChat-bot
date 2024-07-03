import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotHomePageComponent } from './gemini-chatbot/chatbot-home-page/chatbot-home-page.component';
import { SkeletonComponent } from './skeleton/skeleton.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatbotHomePageComponent,
    SkeletonComponent
  ],
  exports:[
    ChatbotHomePageComponent,SkeletonComponent
  ]
})
export class GeminiChatbotModule { }
