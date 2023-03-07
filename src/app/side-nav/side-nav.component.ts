import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Acceuil',
      icon: 'pi pi-home',
      href: '/layout/acceuil'
    },
    {
      number: '2',
      name: 'Situations',
      icon: 'pi pi-calendar',
      href: '/layout/situation'
    },
    {
      number: '3',
      name: 'Rapprochement',
      icon: 'pi pi-file-edit',
      href: '/layout/rapprochement'
    },
    {
      number: '4',
      name: 'Déconnexion',
      icon: 'pi pi-sign-out',
      href: '/'
    },
  ];

  activeItem: number = 0; 

  handleClick(event: Event, index: number) {
    this.activeItem = index;
    event.preventDefault(); // prevent the default behavior of the click event
    
  }

  selectedItem: any;

  onItemClick(event: Event, item: any) {
    const target = event.target as HTMLElement;
    const itemElement = target.closest('.nav-list-item') as HTMLElement & { item: any };
    if (itemElement) {
      this.selectedItem = item;
    }
  }
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate([this.list[this.activeItem].href]); // navigate to first li item's link
  }
  
}
