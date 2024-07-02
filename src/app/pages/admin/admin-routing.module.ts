import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {TeachersComponent} from "./teachers/teachers.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    title: 'Admin Page',
    children: [
      {
        path: 'teachers',
        component: TeachersComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
