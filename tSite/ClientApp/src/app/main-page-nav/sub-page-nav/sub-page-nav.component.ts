import { Component, OnInit, OnChanges } from '@angular/core';
import { subpages } from './spgs';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { NavHeightService } from '../../Services/height-service.service';

@Component({
  selector: 'app-sub-page-nav',
  templateUrl: './sub-page-nav.component.html',
  styleUrls: ['./sub-page-nav.component.css']
})

export class SubPageNavComponent implements OnInit {

  pages = subpages;
  mySubPage: any;
  hDiff = 10;
  mNav: string | undefined;
  isExpanded: boolean = true;
  trimLoc: number = 0;

  constructor(public route: ActivatedRoute, public router: Router, private hService: NavHeightService) {

    console.log(this.pages);

    /*Get Relative Path*/
    this.mNav = this.route.snapshot.routeConfig!.path!;
    this.trimLoc = this.mNav.lastIndexOf("/");
    this.mNav = this.mNav.substr(this.trimLoc + 1, this.mNav.length-this.trimLoc);
    console.log(this.mNav);

    /*Identify Page*/
    for (let i = 0; i < this.pages.length; ++i) {
      if (this.mNav == this.pages[i].linkURL)
        this.mySubPage = this.pages[i];
    }

  }

  ngOnChanges() {
    console.log(!this.isExpanded);
    this.isExpanded ? this.hDiff = 10 : this.hDiff = 4;
  }

  ngOnInit(): void {
    this.hService.cast.subscribe(h => this.isExpanded = h);
  }

}
