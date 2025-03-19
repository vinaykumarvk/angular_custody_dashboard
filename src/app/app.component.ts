
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, DashboardComponent],
  template: `<app-dashboard></app-dashboard>`
})
export class AppComponent {
  title = 'Operations Dashboard';
}
