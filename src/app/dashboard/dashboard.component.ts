import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TradeService } from '../services/trade.service';
import { Trade } from '../models/trade.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  providers: [TradeService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Operations Dashboard';
  isSidebarCollapsed = false;
  unmappedTrades: Trade[] = [];
  mappedTrades: Trade[] = [];
  settledTrades: Trade[] = [];

  constructor(private tradeService: TradeService) {}

  ngOnInit() {
    this.loadTrades();
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  private loadTrades() {
    this.tradeService.getTradesByStatus('UNMAPPED').subscribe(trades => {
      this.unmappedTrades = trades;
    });

    this.tradeService.getTradesByStatus('MAPPED').subscribe(trades => {
      this.mappedTrades = trades;
    });

    this.tradeService.getTradesByStatus('SETTLED').subscribe(trades => {
      this.settledTrades = trades;
    });
  }
}
