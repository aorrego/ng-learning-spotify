import { JsonPipe } from '@angular/common';
import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService ) {

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12) ]),

      });
  }

  sendLogin() {
    const body = this.formLogin.value;
    console.log('body: ', body);
    const {email, password} = this.formLogin.value;
    this.authService.sendCredentials(email, password);
  }
}
