import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathApi } from '../api/config.api';
import { Message } from './../interface/message.api';

@Injectable({
  providedIn: 'root',
})
export class ResetPassService {
  private pathApi = new PathApi();
  constructor(private http: HttpClient, private router: Router) {}

  async resetPass(email: string, pass: string) {
    return this.http
      .put<{ Message: string; StatusCode: number }>(
        this.pathApi.api_path_reset,
        { email, pass }
      )
      .subscribe({
        next: (response) => {
          if (response.Message == 'Edit Success') {
            this.router.navigate(['loginPage']);
          } else {
            alert(response.Message);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
