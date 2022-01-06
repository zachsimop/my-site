import { Component, OnInit } from '@angular/core';
import { NavHeightService } from '../Services/height-service.service'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  isExpanded: boolean = true;

  constructor(private hSerivce: NavHeightService) { }

  ngOnInit() { this.hSerivce.cast.subscribe(x => this.isExpanded = x); }

}
