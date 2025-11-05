import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { InternetBankComponent } from './internet-bank/internet-bank.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'internet-bank', component: InternetBankComponent },
  {
    path: 'account',
    component: AccountComponent,
  },
];
