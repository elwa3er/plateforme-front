import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  items: SidebarItem[] = [];
}

export interface SidebarItem {
  label: string;
  icon: string;
  link: string;
}
