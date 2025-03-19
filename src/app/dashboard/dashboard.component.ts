import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Operations Dashboard';
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
