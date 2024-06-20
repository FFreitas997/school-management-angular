import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {RouterLink} from "@angular/router";
import {AuthenticationService} from "../../api/services/authentication.service";
import {AuthenticationRequestDto} from "../../api/models/authentication-request-dto";
import {TokenService} from "../../services/token.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatProgressBarModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false;
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-z0-9]+)$')])
  })

  constructor(
    private service: AuthenticationService,
    private tokenService: TokenService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((param) => {
      console.log(param);
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.invalid)
      return;
    this.isLoading = true;
    const request: AuthenticationRequestDto = {
      email: this.username ? this.username.value : '',
      password: this.password ? this.password.value : ''
    }
    this.service.authenticate({body: request})
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.tokenService.saveToken(response.access_token as string);
          // redirect based on a role
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.open('Something went wrong. Please try again', 'OK', {duration: 5000});
        }
      })
  }
}
