import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  submitted:Boolean = false;
  
  constructor(public formBuilder:FormBuilder ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]],
    });
   }

  ngOnInit(): void {



  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    console.log(this.loginForm.value);
    // if (this.email) {
    //   alert('Email submitted: ' + this.email);
    // } else {
    //   alert('Please enter a valid email address.');
    // }
  }

}
