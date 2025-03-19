import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="detail-container">
      <div class="header">
        <button (click)="goBack()">Back</button>
        <h1>Dummy Screen</h1>
      </div>
    </div>
  `,
  styles: [`
    .detail-container {
      padding: 20px;
      background-color: #C6DBFC; /* Retained from original */
      min-height: 100vh; /* Retained from original */
    }
    .header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px; /* Retained from original */
    }
    button {
      padding: 8px 16px;
      background-color: #2448a5; /* Retained from original */
      color: white; /* Retained from original */
      border: none; /* Retained from original */
      border-radius: 4px; /* Retained from original */
      cursor: pointer;
    }
    button:hover { /* Retained from original, adjusted selector */
      background-color: #1a3578;
    }
    h1 { /* Retained from original */
      margin: 0;
      color: #2448a5;
    }
  `]
})
export class DetailComponent {
  goBack() {
    window.history.back();
  }
}