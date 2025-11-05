import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-internet-bank',
  standalone: true, // ✅ THIS is what you’re missing
  imports: [CommonModule, FormsModule], // OK to keep empty or add needed modules
  templateUrl: './internet-bank.component.html',
  styleUrls: ['./internet-bank.component.css'], // also fix `styleUrl` → `styleUrls`
})
export class InternetBankComponent {
  userId: string = '';
  personalIdNumber: string = '';
  onLogin() {
    // Handle login logic here
    console.log('Login attemped:', {});
    alert('Login button clicked! Check console for details.');
  }
}
