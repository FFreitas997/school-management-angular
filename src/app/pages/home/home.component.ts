import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsersManagementSystemService} from "../../api/services/users-management-system.service";
import {AuthService} from "../../services/authentication/auth.service";
import {UserRole} from "../../services/authentication/user-role";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsersManagementSystemService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.userService
      .getUserRole()
      .subscribe({
        next: (role) => {
          console.log(role);
          this.authService.storeCurrentUser(role);
          this.navigationBasedOnRole(role);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  private navigationBasedOnRole(role: string) {
    switch (role) {
      case UserRole.ADMIN:
        this.router.navigate(['/admin']).then();
        break;
      case UserRole.TEACHER:
        this.router.navigate(['/teacher']).then();
        break;
      case UserRole.STUDENT:
        this.router.navigate(['/student']).then();
        break;
      case UserRole.PARENT:
        this.router.navigate(['/parent']).then();
        break;
    }
  }
}
