import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Trade } from '../models/trade.interface';
import { supabase } from '../config/supabase.config';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private readonly TABLE_NAME = 'trades';

  private mapTrade(data: any): Trade {
    return {
      id: data.id,
      tradeId: data.trade_id,
      securityName: data.security_name,
      quantity: data.quantity,
      price: data.price,
      tradeDate: data.trade_date,
      settlementDate: data.settlement_date,
      counterparty: data.counterparty,
      status: data.status,
      currency: data.currency,
      totalAmount: data.total_amount
    };
  }

  getAllTrades(): Observable<Trade[]> {
    return from(
      supabase
        .from(this.TABLE_NAME)
        .select('*')
    ).pipe(
      map(response => (response.data || []).map(this.mapTrade))
    );
  }

  getTradesByStatus(status: 'UNMAPPED' | 'MAPPED' | 'SETTLED'): Observable<Trade[]> {
    return from(
      supabase
        .from(this.TABLE_NAME)
        .select('*')
        .eq('status', status)
    ).pipe(
      map(response => (response.data || []).map(this.mapTrade))
    );
  }

  getTradeById(id: string): Observable<Trade | undefined> {
    return from(
      supabase
        .from(this.TABLE_NAME)
        .select('*')
        .eq('id', id)
        .single()
    ).pipe(
      map(response => response.data ? this.mapTrade(response.data) : undefined)
    );
  }

  createTrade(trade: Omit<Trade, 'id'>): Observable<Trade> {
    const dbTrade = {
      trade_id: trade.tradeId,
      security_name: trade.securityName,
      quantity: trade.quantity,
      price: trade.price,
      trade_date: trade.tradeDate,
      settlement_date: trade.settlementDate,
      counterparty: trade.counterparty,
      status: trade.status,
      currency: trade.currency,
      total_amount: trade.totalAmount
    };

    return from(
      supabase
        .from(this.TABLE_NAME)
        .insert([dbTrade])
        .select()
        .single()
    ).pipe(
      map(response => this.mapTrade(response.data))
    );
  }

  updateTrade(id: string, trade: Partial<Trade>): Observable<Trade> {
    const dbTrade: any = {};
    if (trade.tradeId) dbTrade.trade_id = trade.tradeId;
    if (trade.securityName) dbTrade.security_name = trade.securityName;
    if (trade.quantity) dbTrade.quantity = trade.quantity;
    if (trade.price) dbTrade.price = trade.price;
    if (trade.tradeDate) dbTrade.trade_date = trade.tradeDate;
    if (trade.settlementDate) dbTrade.settlement_date = trade.settlementDate;
    if (trade.counterparty) dbTrade.counterparty = trade.counterparty;
    if (trade.status) dbTrade.status = trade.status;
    if (trade.currency) dbTrade.currency = trade.currency;
    if (trade.totalAmount) dbTrade.total_amount = trade.totalAmount;

    return from(
      supabase
        .from(this.TABLE_NAME)
        .update(dbTrade)
        .eq('id', id)
        .select()
        .single()
    ).pipe(
      map(response => this.mapTrade(response.data))
    );
  }

  deleteTrade(id: string): Observable<void> {
    return from(
      supabase
        .from(this.TABLE_NAME)
        .delete()
        .eq('id', id)
    ).pipe(
      map(() => void 0)
    );
  }
} 