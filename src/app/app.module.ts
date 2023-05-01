import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { OopsPageComponent } from './oops-page/oops-page.component';
import { ResetPassPageComponent } from './reset-pass-page/reset-pass-page.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UserPageComponent,
    OopsPageComponent,
    ResetPassPageComponent,
    QrcodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
