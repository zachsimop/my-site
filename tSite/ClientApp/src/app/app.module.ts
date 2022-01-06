import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { NavItemComponent } from './nav-menu/nav-item/nav-item.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainPageNavComponent } from './main-page-nav/main-page-nav.component';
import { SubPageNavComponent } from './main-page-nav/sub-page-nav/sub-page-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TempPageComponent } from './temp-page/temp-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NavItemComponent,
    AboutMeComponent,
    MainPageNavComponent,
    SubPageNavComponent,
    PageNotFoundComponent,
    TempPageComponent,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'journals', component: MainPageNavComponent },
        { path: 'journals/book-reviews', component: SubPageNavComponent },
        { path: 'journals/running', component: SubPageNavComponent },
        { path: 'journals/music', component: SubPageNavComponent },
      { path: 'journals/thoughts', component: SubPageNavComponent },
        { path: 'journals/trips', component: SubPageNavComponent },
        { path: 'journals/projects', component: SubPageNavComponent },
      { path: 'gallery', component: MainPageNavComponent },
        { path: 'gallery/digital-media', component: SubPageNavComponent },
        { path: 'gallery/locations', component: SubPageNavComponent },
        { path: 'gallery/photos', component: SubPageNavComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
