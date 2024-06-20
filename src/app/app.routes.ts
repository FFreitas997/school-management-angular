import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ConfirmationComponent} from "./pages/confirmation/confirmation.component";
import {TeacherComponent} from "./pages/teacher/teacher.component";
import {StudentComponent} from "./pages/student/student.component";
import {ParentComponent} from "./pages/parent/parent.component";
import {AdminComponent} from "./pages/admin/admin.component";

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
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  }
];
