import { Routes } from '@angular/router';
import { SubPageNavComponent } from './sub-page-nav/sub-page-nav.component';

export interface mainpages {
  linkURL: string,
  title: string,
  links: Routes,
  imgsrcs: string[],
  description: string;
}

export const mainpages = [
  {
    linkURL: ['/journals'],
    title: "Journals",
    links: ['projects','book-reviews','running', 'music', 'thoughts', 'trips'],
    imgsrcs: ['assets/images/zjdhome.jpeg', 'assets/images/tallac1.jpeg', 'assets/images/tallac2.jpeg'],
    description: "The idea of 'journals' orignated from my silly C++ brain. One day I was thinking how nice it'd be to have an easily extensible object to help me " +
      "organize thoughts I had. Unfotunately, I had no idea how to do this on web, so I learned Angular. To my great pleasure, I developed a system " +
      "where I only need to fill out one TypeScript object, and it populates everything for me, inculding entries. Thank you Angular, Sincerely, Zach."
  },
  {
    linkURL: ['/gallery'],
    title: "Gallery",
    links: ['digital-media','locations','photos'],
    imgsrcs: ['assets/images/tallac1.jpeg'],
    description: "The Gallery is for collections of visual art and memories. I hardly do photography, but much of the beauty in my life I exprience in images, " +
      "so I wished to reserve a section on here for them. You may see some other people on here, in which I can assure you: they are the best! " +
      "I hope you find something you enjoy."
  }
];