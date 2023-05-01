import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { PathApi } from '../api/config.api';
import { Message } from '../interface/message.api';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private pathApi = new PathApi();
  constructor(private http: HttpClient, private router: Router) {}

  async registerService(
    id_card: string,
    fname: string,
    lname: string,
    email: string,
    address: string,
    pass: string
  ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `${this.pathApi.header}`,
      }),
    };
    return this.http
      .post<{ Message: string; StatusCode: number }>(
        this.pathApi.api_path_register,
        {
          email,
          pass,
          id_card,
          fname,
          lname,
          address,
        },
        httpOptions
      )
      .subscribe({
        next: (response) => {
          if (response.Message == 'Query Success') {
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
