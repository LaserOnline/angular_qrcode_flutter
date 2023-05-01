import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { PathApi } from '../api/config.api';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  private pathApi = new PathApi();
  email!: string;
  key_qrcode: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,

    private user: UserService
  ) {}
  async ngOnInit() {
    if (localStorage.getItem('user')) {
      const DataUser = JSON.parse(localStorage.getItem('user')!);
      const user = JSON.parse(DataUser);
      this.email = user.Email;
      this.QrCode(this.email);
    } else {
      this.router.navigate(['loginPage']);
    }
  }

  backend() {
    this.router.navigate(['userPage']);
  }

  QrCode(email: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `${this.pathApi.header}`,
      }),
    };
    return this.http
      .post<{ Message: string; StatusCode: number }>(
        this.pathApi.api_path_generateqrcode,
        {
          email,
        },
        httpOptions
      )
      .subscribe({
        next: (response) => {
          if (response.StatusCode == 201) {
            this.key_qrcode += response.Message;
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            return alert(error.error.Message);
          } else {
            return alert(error.message);
          }
        },
      });
  }
}
