import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResetPassService } from '../service/reset-pass.service';
@Component({
  selector: 'app-reset-pass-page',
  templateUrl: './reset-pass-page.component.html',
  styleUrls: ['./reset-pass-page.component.scss'],
})
export class ResetPassPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private resetPass: ResetPassService
  ) {}

  fromResetPass = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
    pass_c: ['', Validators.required],
  });

  resetPassword() {
    const email = this.fromResetPass.get('email')!.value || '';
    const pass = this.fromResetPass.get('pass')!.value || '';
    const pass_c = this.fromResetPass.get('pass_c')!.value || '';
    if (pass != pass_c) {
      alert('รหัสของคุณไม่ตรงกัน');
      this.fromResetPass.reset();
    } else {
      this.resetPass.resetPass(email, pass);
    }
  }
}
