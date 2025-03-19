
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  template: `
    <div class="detail-container">
      <h1>Detail Page</h1>
      <p>This is a placeholder page for future content.</p>
    </div>
  `,
  styles: [`
    .detail-container {
      padding: 20px;
    }
  `]
})
export class DetailComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  template: '<div>Detail page</div>'
})
export class DetailComponent {
}
