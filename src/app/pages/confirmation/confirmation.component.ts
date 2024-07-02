import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../api/services/authentication.service";
import {ConfirmationState} from "./confirmation-state";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {CodeInputModule} from "angular-code-input";

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, MatProgressSpinner, CodeInputModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {

  public currentState: ConfirmationState = ConfirmationState.NOT_CONFIRMED
  public ConfirmationState = ConfirmationState;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {
  }

  onSubmit(code: string) {
    this.currentState = ConfirmationState.LOADING;

    this.authService
      .confirmAccount({code: code})
      .subscribe({
        next: () => (this.handleSuccess()),
        error: () => (this.handleError())
      });
  }

  public handleSuccess(): void {
    this.currentState = ConfirmationState.CONFIRMED;
    setTimeout(() => (this.router.navigate(['/login'])), 5000);
  }

  public handleError(): void {
    this.currentState = ConfirmationState.ERROR;
    setTimeout(() => (this.currentState = ConfirmationState.NOT_CONFIRMED), 5000);
  }
}
