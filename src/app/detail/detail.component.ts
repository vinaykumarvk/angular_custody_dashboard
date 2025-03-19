
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="detail-container">
      <div class="header">
        <button class="back-button" (click)="goBack()">← Back</button>
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
    .back-button {
      padding: 8px 16px;
      background-color: #2448a5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .back-button:hover {
      background-color: #1a3578;
    }
    h1 {
      margin: 0;
      color: #2448a5;
    }
  `]
})
export class DetailComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
