import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  title = 'recettes_narsa';
  sideNavStatus: boolean = false;
 
  isHovered = false;
  
  onHover() {
    this.isHovered = true;
  }

  onHoverExit() {
    this.isHovered = false;
  }
}
