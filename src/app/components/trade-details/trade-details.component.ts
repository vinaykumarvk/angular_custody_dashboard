import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TradeService } from '../../services/trade.service';
import { Trade } from '../../models/trade.interface';

@Component({
  selector: 'app-trade-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [TradeService],
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.css']
})
export class TradeDetailsComponent implements OnInit {
  trade: Trade | null = null;
  trades: Trade[] = [];
  status: string | null = null;
  loading = false;
  error: string | null = null;
  expandedRow: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private tradeService: TradeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loading = true;
      this.error = null;
      this.expandedRow = null;
      
      if (params['id']) {
        this.loadTradeById(params['id']);
      } else if (params['status']) {
        this.status = params['status'];
        this.loadTradesByStatus(params['status']);
      }
    });
  }

  loadTradeById(id: string) {
    this.loading = true;
    this.error = null;
    this.trades = []; // Clear trades list when viewing single trade

    this.tradeService.getTradeById(id).subscribe({
      next: (trade) => {
        if (trade) {
          this.trade = trade;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching trade:', error);
        this.error = 'Failed to load trade details';
        this.loading = false;
      }
    });
  }

  loadTradesByStatus(status: string) {
    this.loading = true;
    this.error = null;
    this.trade = null; // Clear single trade when viewing list

    this.tradeService.getTradesByStatus(status as 'UNMAPPED' | 'MAPPED' | 'SETTLED').subscribe({
      next: (trades) => {
        this.trades = trades;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching trades:', error);
        this.error = 'Failed to load trades list';
        this.loading = false;
      }
    });
  }

  toggleRow(index: number) {
    this.expandedRow = this.expandedRow === index ? null : index;
  }

  // Helper method to handle row clicks in the trades list
  onTradeRowClick(trade: Trade) {
    if (trade.id) {
      this.loadTradeById(trade.id);
    }
  }
} 