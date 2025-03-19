
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css']
})
export class DashboardComponent {
  title = 'Operations Dashboard';
}
