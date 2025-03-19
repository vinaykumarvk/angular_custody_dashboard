
import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detail', component: DetailComponent }
];
