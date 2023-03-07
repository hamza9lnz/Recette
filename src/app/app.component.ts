import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
