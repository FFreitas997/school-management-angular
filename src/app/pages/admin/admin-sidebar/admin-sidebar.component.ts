import { Component } from '@angular/core';
import {AdminSidebar} from "./admin-sidebar";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    MatIcon,
    MatListItemIcon
  ],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {

  public sidebar: AdminSidebar[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      route: '/admin/dashboard',
      isActive: false,
      children: []
    },
    {
      name: 'Teachers',
      icon: 'class',
      route: '/admin/teachers',
      isActive: false,
      children: []
    }
  ]
}
