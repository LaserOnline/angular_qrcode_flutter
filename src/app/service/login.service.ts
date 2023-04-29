import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { PathApi } from '../api/config.api';
import { UserService } from './user.service';
import { Message } from './../interface/message.api';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private pathApi = new PathApi();
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  async login(email: string, pass: string) {
    return this.http
      .post<{ Message: string; StatusCode: number }>(
        this.pathApi.api_path_login,
        {
          email,
          pass,
        }
      )
      .subscribe({
        next: (response) => {
          if (response.StatusCode == 201) {
            const userJson = JSON.stringify(response.Message[0]);
            this.userService.setUser(userJson);
            this.router.navigate(['userPage']);
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            alert(error.error.Message);
          } else {
            alert(error.message);
          }
        },
      });
  }
}
