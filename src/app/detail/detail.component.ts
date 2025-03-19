
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
      background-color: #C6DBFC;
      min-height: 100vh;
    }
    .header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }
    button {
      padding: 8px 16px;
      background-color: #2448a5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #1a3578;
    }
    h1 {
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
