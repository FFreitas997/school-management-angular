export interface AdminSidebar {
  name: string;
  icon: string;
  route: string;
  isActive: boolean;
  children: AdminSidebar[];
}
