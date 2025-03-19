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
        <div class="section">
          <div class="section-header">
            <h2>Activities</h2>
          </div>
          <div class="activities-container">
            <div class="activity-column">
              <h3>To be Approved (174)</h3>
              <div class="activity-item" routerLink="/detail">
                <span>Client</span>
                <span>20</span>
              </div>
              <div class="activity-item" routerLink="/detail">
                <span>Client Exchange</span>
                <span>30</span>
              </div>
              <div class="activity-item" routerLink="/detail">
                <span>Client Depository</span>
                <span>1</span>
              </div>
              <div class="activity-item" routerLink="/detail">
                <span>Party</span>
                <span>34</span>
              </div>
              <div class="activity-item" routerLink="/detail">
                <span>Bank Account</span>
                <span>89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
export class DashboardComponent {
  title = 'Operations Dashboard';
}