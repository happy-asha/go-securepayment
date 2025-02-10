import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  cardData: any[] = [];

  ngOnInit() {
    // Retrieve and parse data from LocalStorage
    const storedData = localStorage.getItem('payment');
    if (storedData) {
      this.cardData = JSON.parse(storedData);
    }
  }

  // Function to mask the card number
  maskCardNumber(cardNumber: string): string {
    return cardNumber.slice(0, 4) + ' **** **** ' + cardNumber.slice(-4);
  }


}
