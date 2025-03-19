
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="main-container">
      <div class="sidebar">
        <h1>Operations Dashboard</h1>
      </div>
      <div class="content">
        <!-- Cards section -->
        <div class="cards">
          <div class="card" routerLink="/detail">
            <h3>Card 1</h3>
            <p>Description 1</p>
          </div>
          <div class="card" routerLink="/detail">
            <h3>Card 2</h3>
            <p>Description 2</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .main-container {
      display: flex;
      height: 100vh;
    }
    .sidebar {
      width: 250px;
      background-color: #2448a5;
      color: white;
      padding: 20px;
    }
    .content {
      flex: 1;
      padding: 20px;
      background-color: #C6DBFC;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      cursor: pointer;
    }
    .card:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class DashboardComponent {
  title = 'Operations Dashboard';
}
