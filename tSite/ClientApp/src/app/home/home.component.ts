import { Component, OnInit} from '@angular/core';
import { NavHeightService } from '../Services/height-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  isExpanded: boolean = true;

  public constructor(private hSerivce: NavHeightService) { }

  ngOnInit() { this.hSerivce.cast.subscribe(x => this.isExpanded = x); }

}
