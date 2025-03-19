
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="main-container">
      <div class="sidebar">
        <h1>Operations Dashboard</h1>
      </div>
      <div class="content">
        <!-- Your existing HTML content here -->
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'Operations Dashboard';
}
