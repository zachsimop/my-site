export interface subpages {
  linkURL: string,
  links: string[],
  description: string;
}

export const subpages = [
  {
    linkURL: 'projects',
    links: ['/my-site', '/stimulus-generator'],
    description: "This Journal holds documentation of a few of my software projects, including this one. For this site, It holds a record of things I learned and what is currently " +
      "being worked on. It also holds the relevant git repos and resources I accessed for each project"
  },
  {
    linkURL: 'book-reviews',
    links: ['/when-breath-becomes-air'],
    description: "To say these are book reviews may be ostentatious; they  aptly are called reflections. They are a place for me to synthesize my " +
      "thoughts about a book after I've read it. There may be criticsim, and there may be plain confusion, but my opinion will be written and saved (for better or worse)."
  },
  {
    linkURL: 'running',
    links: ['/record','/notes'],
    description: "Here I record the history of my running career. Currently, I am training for a half marathon. The 'record' entry I intend to connect to my strava account, so  " +
      "I consolidate my daily runs on the site. The notes contain records and thoughts for improvement."
  },
  {
    linkURL: 'music',
    links: ['/top-songs','/reflections'],
    description: "Music keeps time. Its intresting how music uniquely evokes specific memories from our lives, and for this I love it. I wish to catalog these 'memories' here. " +
      "I intend to connect my 'top-songs' entry to my Spotify top songs playslist via the Spotify API, and also write about some songs that mean something to me."
  },
  {
    linkURL: 'thoughts',
    links: ['/theology', '/philosophy','/presonal'],
    description: "This is a random collection of writings in subjects I'm intrested in. Some may be papers I've written for school, others may just be reflections on a particular " +
      "topic. Whichever the case, this is intended to record the specific intellectual endevors I pursue."
  },
  {
    linkURL: 'trips',
    links: ['/tallac', '/washington', '/backpacking'],
    description: "This is a Journal of hikes and expeditions. I embark on many and was inspired by a local named Ted to create my own archive. Hopefully they tell something akin " +
      "to a story and hold some intresting tales."
  },
  {
    linkURL: 'digital-media',
    links: ['/ambience, /adobe'],
    description: ""
  },
  {
    linkURL: 'locations',
    links: ['/sierra-nevadas','/folsom-lake', '/yosemite'],
    description: "Pictures of places I love."
  },
  {
    linkURL: 'photos',
    links: ['/my-favorites', '/friends-and-family', ],
    description: "My favorite things."
  }
];