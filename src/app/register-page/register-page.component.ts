import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  fromRegister = this.formBuilder.group({
    id_card: ['', Validators.required],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    pass: ['', Validators.required],
    pass_c: ['', Validators.required],
  });

  register() {
    const id_card = this.fromRegister.get('id_card')!.value || '';
    const fname = this.fromRegister.get('fname')!.value || '';
    const lname = this.fromRegister.get('lname')!.value || '';
    const email = this.fromRegister.get('email')!.value || '';
    const address = this.fromRegister.get('address')!.value || '';
    const pass = this.fromRegister.get('pass')!.value || '';
    const pass_c = this.fromRegister.get('pass_c')!.value || '';
    if (pass != pass_c) {
      alert('รหัสผ่านของคุณไม่ตรงกัน');
    } else {
      this.registerService.registerService(
        id_card,
        fname,
        lname,
        email,
        address,
        pass
      );
    }
  }
}
