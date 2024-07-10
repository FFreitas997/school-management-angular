import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/authentication/auth.service";
import {UserRole} from "../services/authentication/user-role";

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isTokenInvalid()) {
    router.navigate(['/login']).then();
    return false;
  }

  if (authService.getCurrentUser() !== UserRole.ADMIN) {
    router.navigate(['/login']).then();
    return false;
  }

  return true
};
