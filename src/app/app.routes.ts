import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'trade/:id', component: TradeDetailsComponent },
  { path: 'trades/:status', component: TradeDetailsComponent },
  { path: '**', redirectTo: '' }
];
