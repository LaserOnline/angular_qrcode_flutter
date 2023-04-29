import { Routes } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { OopsPageComponent } from '../oops-page/oops-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { ResetPassPageComponent } from '../reset-pass-page/reset-pass-page.component';
import { QrcodeComponent } from '../qrcode/qrcode.component';
import { UploadImagesComponent } from '../upload-images/upload-images.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'loginPage',
  },
  {
    path: 'loginPage',
    component: LoginPageComponent,
  },
  {
    path: 'registerPage',
    component: RegisterPageComponent,
  },
  {
    path: 'resetPage',
    component: ResetPassPageComponent,
  },
  {
    path: 'userPage',
    component: UserPageComponent,
  },
  {
    path: 'qrcode',
    component: QrcodeComponent,
  },
  {
    path: 'upload',
    component: UploadImagesComponent,
  },
  {
    path: '**',
    component: OopsPageComponent,
  },
];
