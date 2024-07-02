import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ConfirmationComponent} from "./pages/confirmation/confirmation.component";
import {adminGuard} from "./guard/admin.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page'
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    title: 'Confirmation Page'
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
  }
/*  {
    path: 'teacher',
    component: TeacherComponent,
    title: 'Teacher Page'
  },
  {
    path: 'student',
    component: StudentComponent,
    title: 'Student Page'
  },

  {
    path: 'parent',
    component: ParentComponent,
    title: 'Parent Page'
  }*/
];
