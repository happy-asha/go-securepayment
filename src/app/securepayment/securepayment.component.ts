import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-securepayment',
  templateUrl: './securepayment.component.html',
  styleUrls: ['./securepayment.component.scss']
})
export class SecurepaymentComponent implements OnInit {
  paymentForm: FormGroup;
  payment: any =[];

  constructor(private fb: FormBuilder,public cryptoService:CryptoService) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiry: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/[0-9]{2}')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      billingAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      country: ['India', Validators.required],
      gst: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }
  ngOnInit(): void {
    
  }

  submitForm() {
    if (this.paymentForm.valid) {
      console.log('Form Data:', this.paymentForm.value);
      alert('Payment details submitted successfully!');
      this.payment = this.paymentForm.value
      this.cryptoService.setItem('payment',this.paymentForm.value);
      
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
