import { StoryBlock, SlidePhoto } from './types';

export const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder emotional piano music

export const STORY_BLOCKS: StoryBlock[] = [
  {
    id: 1,
    title: "The Day We Met",
    content: "Do you remember the first time our eyes locked? The world seemed to slow down, and in that crowded room, all I could see was you. It was the beginning of my favorite story.",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "The Moment I Realized...",
    content: "It wasn't a grand gesture, but a quiet moment. Maybe it was your laugh, or the way you look at the sunset. That's when I knew—my heart had found its home in you.",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Today",
    content: "Every day with you is a gift I cherish. You bring warmth to my coldest days and light to my darkest nights. Thank you for being my rock, my muse, and my love.",
    image: "https://picsum.photos/600/400?random=3"
  }
];

export const GALLERY_PHOTOS: SlidePhoto[] = [
  { id: 1, url: "https://picsum.photos/800/1200?random=10", caption: "That time we got lost but didn't care." },
  { id: 2, url: "https://picsum.photos/800/1200?random=11", caption: "Your smile that lights up my world." },
  { id: 3, url: "https://picsum.photos/800/1200?random=12", caption: "A quiet moment just for us." },
  { id: 4, url: "https://picsum.photos/800/1200?random=13", caption: "Adventures are better with you." },
  { id: 5, url: "https://picsum.photos/800/1200?random=14", caption: "Simply beautiful." },
];
