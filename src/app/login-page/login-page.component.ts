import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}
  fromLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
  });
  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['userPage']);
    }
  }

  login() {
    const email = this.fromLogin.get('email')!.value || '';
    const pass = this.fromLogin.get('pass')!.value || '';
    this.loginService.login(email, pass);
  }
}
