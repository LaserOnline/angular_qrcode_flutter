import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../interface/user.interface';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  edit: boolean = false;
  idcard!: string;
  email!: string;
  fname!: string;
  lname!: string;
  address!: string;

  url: string =
    'http://localhost/apache/PHP-Backend-Angukar-Flutter-JWT/src/upload/profile/';
  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['loginPage']);
    } else {
      const DataUser = JSON.parse(localStorage.getItem('user')!);
      const user = JSON.parse(DataUser);
      this.idcard = user.ID_card;
      this.email = user.Email;
      this.fname = user.Fname;
      this.lname = user.Lname;
      this.address = user.Address;
      this.url += user.Profile;
    }
  }

  logout() {
    this.userService.logout();
  }
  QrCode() {
    this.router.navigate(['qrcode']);
  }
}
