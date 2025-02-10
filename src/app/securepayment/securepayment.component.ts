import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CryptoService } from '../crypto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securepayment',
  templateUrl: './securepayment.component.html',
  styleUrls: ['./securepayment.component.scss']
})
export class SecurepaymentComponent implements OnInit {
  paymentForm: FormGroup;
  payment: any =[];

  constructor(private fb: FormBuilder,public cryptoService:CryptoService, public router:Router) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      expiry: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/[0-9]{2}')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      billingAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      country: ['India', Validators.required],
      otp: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  ngOnInit(): void {
    
  }

  submitForm() {
    console.log('Form Data:', this.paymentForm);
    if (this.paymentForm.valid) {
      console.log('Form Data:', this.paymentForm.value);
      alert('Payment details submitted successfully!');
      let storedPayment = localStorage.getItem('payment');
      let payment = storedPayment ? JSON.parse(storedPayment): [];
      if (!Array.isArray(payment)) {
       payment = [];
      }
  
      // Push the new payment object into the array
      payment.push(this.paymentForm.value);
      console.log("this.payment",payment);
      localStorage.setItem('payment',JSON.stringify(payment));
      this.router.navigate(['payment-details'])
      
      
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
  sendOTP(){
    console.log("this.paymentForm.value.phone",this.paymentForm.value.phone);
    if (this.paymentForm.value.phone !='' || undefined) {
      alert('OTP sent successfully!');
    }else{
      alert('Please Phone number correctly.');
    }
  }
}
