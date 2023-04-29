import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router) {}

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr) as User;
    }
    return null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['loginPage']);
  }
}
