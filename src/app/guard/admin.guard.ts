import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isTokenInvalid()) {
    router.navigate(['/login']).then();
    return false;
  }

  if (authService.currentUser.role !== 'admin') {
    router.navigate(['/login']).then();
    return false;
  }

  return true
};
