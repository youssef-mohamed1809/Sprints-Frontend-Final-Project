import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Validation from './confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup(
    {
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password_confirm: new FormControl('', [Validators.required]),
    },
    { validators: [Validation.match('password', 'password_confirm')] }
  );
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  register() {
    this.authService.register(this.registerForm.value).subscribe(
      (data: any) => {
        this.router.navigate(['']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
