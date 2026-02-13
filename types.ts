export interface StoryBlock {
  id: number;
  title: string;
  content: string;
  image: string;
}

export interface SlidePhoto {
  id: number;
  url: string;
  caption: string;
}

export enum AppState {
  OPENING = 'OPENING',
  MAIN = 'MAIN',
}
