import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _balance = signal<number>(0);

  constructor(private http: HttpClient) {}
  loadAccount() {
    this.http
      .get<{ balance: number }>('/assets/mock-data/accounts.json')
      .subscribe();
  }
}
