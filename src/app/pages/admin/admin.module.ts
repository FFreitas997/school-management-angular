import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from "./admin.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {AdminSidebarComponent} from "./admin-sidebar/admin-sidebar.component";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [AdminComponent, TeachersComponent],
  imports: [CommonModule, AdminRoutingModule, AdminSidebarComponent, MatSidenavModule]
})
export class AdminModule { }
