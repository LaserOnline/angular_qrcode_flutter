import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent implements OnInit {
  selectedFile!: File;
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['loginPage']);
    }
  }
  selectfile(event: any) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }
  upload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(fd);
  }
}
