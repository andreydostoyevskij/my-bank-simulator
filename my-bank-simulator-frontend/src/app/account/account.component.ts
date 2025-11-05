import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-account',
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  standalone: true,
})
export class AccountComponent {
  balance = this.accountService._balance;
  constructor(private accountService: AccountService) {
    effect(() => {
      console.log('Balance updated:', this.balance());
    });
  }

  accountNumber: string = '';

  currency: string = 'EUR';
  deposit() {
    console.log('You have deposited money into your account.');
  }
  withdraw() {
    console.log('You have withdrawn money from your account.');
  }
}
