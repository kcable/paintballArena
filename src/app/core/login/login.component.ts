import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {
  rePasswordValidatorFactory,
  usernameValidator,
} from 'src/app/validators/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  apiError: string;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(5), usernameValidator],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  // const passwordControl = this.fb.control(['', [Validators.required, Validators.minLength(5)]])
  // password: passwordControl,
  // rePassword: ['', [Validators.required, Validators.minLength(5), rePasswordValidatorFactory(passwordControl)]]
  submitHandler(): void {
    const data = this.form.value;
    this.isLoading = true;
    this.userService.login(data).subscribe({
      next: (resData) => {
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoading = false;
        this.apiError = err;
        console.error(err);
      },
    });
  }
  ngOnInit(): void {}
}
