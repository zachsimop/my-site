import { Component } from '@angular/core';
import { NavHeightService } from '../Services/height-service.service'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = true;

  public constructor(private hService: NavHeightService) {

    this.hService.updateHeight(this.isExpanded);

  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.hService.updateHeight(this.isExpanded);
  }
}
