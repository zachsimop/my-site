export interface item {
  linkURL: string,
  name: string,
  isActive: boolean
}

export const items = [
  {
    linkURL: ['/'],
    name: "Home",
    isActive: false
  },
  {
  linkURL: ['/about-me'],
  name: "About Me",
  isActive: true
  },
  {
    linkURL: ['/journals'],
    name: "Journals",
    isActive: true
  },
  {
    linkURL: ['/gallery'],
    name: "Gallery",
    isActive: true
  }
];
