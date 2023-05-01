import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathApi } from '../api/config.api';
import { Message } from './../interface/message.api';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  private pathApi = new PathApi();
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}
  selectedFile!: File;
  edit: boolean = false;
  idcard!: string;
  email!: string;
  fname!: string;
  lname!: string;
  address!: string;

  url: string = `http://${this.pathApi.ip}/apache/PHP-Backend-Angukar-Flutter-JWT/src/upload/profile/`;
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

  async SelectFile(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  async Upload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('email', this.email);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${this.pathApi.header}`,
      }),
    };

    this.http
      .post<{ Message: string; StatusCode: number }>(
        this.pathApi.api_path_upload_profile,
        fd,
        httpOptions
      )
      .subscribe({
        next: (response) => {
          if (response.StatusCode === 200) {
            alert('Upload Successfully');
          }
        },

        error: (error) => {
          alert(error.Message);
        },
      });
  }

  logout() {
    this.userService.logout();
  }

  QrCode() {
    this.router.navigate(['qrcode']);
  }
}
