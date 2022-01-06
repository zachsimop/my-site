import { Component, OnInit, OnChanges } from '@angular/core';
import { mainpages } from './mpgs';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { NavHeightService } from '../Services/height-service.service'

@Component({
  selector: 'app-main-page-nav',
  templateUrl: './main-page-nav.component.html',
  styleUrls: ['./main-page-nav.component.css']
})
export class MainPageNavComponent implements OnInit {

  pages = mainpages;
  myPage;
  isExpanded: boolean = true;
  hDiff = 10;
  

  constructor(public route: ActivatedRoute, public router: Router, private hService: NavHeightService) {
    if (this.route.snapshot.routeConfig!.path == 'journals')
      this.myPage = mainpages[0];
    else
      this.myPage = mainpages[1];
  }

  ngOnChanges() {
    console.log(this.isExpanded);
    this.isExpanded ? this.hDiff = 10 : this.hDiff = 4;
  }

  ngOnInit() {
    this.hService.cast.subscribe(h => this.isExpanded = h);
  }

}
