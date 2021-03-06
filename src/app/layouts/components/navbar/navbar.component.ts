import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'File',
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {label: 'Project'},
          {label: 'Other'},
        ]
      },
        {label: 'Open'},
        {label: 'Quit'}
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
