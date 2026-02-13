import { StoryBlock, SlidePhoto } from './types';

// MUSIC
// Put your music file in: public/music/song.mp3
export const MUSIC_URL = "./public/music/song.mp3"; 

// STORY SECTION
// Put these images in: public/images/
export const STORY_BLOCKS: StoryBlock[] = [
  {
    id: 1,
    title: "The Day We Met",
    content: "Do you remember the first time our eyes locked? The world seemed to slow down, and in that crowded room, all I could see was you. It was the beginning of my favorite story.",
    image: "/public/fist.png" // Replace with your actual filename
  },
  {
    id: 2,
    title: "The Moment I Realized...",
    content: "It wasn't a grand gesture, but a quiet moment. Maybe it was your laugh, or the way you look at the sunset. That's when I knew—my heart had found its home in you.",
    image: "/public/second.png" // Replace with your actual filename
  },
  {
    id: 3,
    title: "Today",
    content: "Every day with you is a gift I cherish. You bring warmth to my coldest days and light to my darkest nights. Thank you for being my rock, my muse, and my love.",
    image: "/public/third.png" // Replace with your actual filename
  }
];

// GALLERY SLIDESHOW
// Put these images in: public/images/
// Recommended size for mobile: 1080x1920 (Portrait)
export const GALLERY_PHOTOS: SlidePhoto[] = [
  { 
    id: 1, 
    url: "/public/slide1.png", // Replace with your actual filename
    caption: "That time we got lost but didn't care." 
  },
  { 
    id: 2, 
    url: "/public/slide2.png", 
    caption: "Your smile that lights up my world." 
  },
  { 
    id: 3, 
    url: "/public/slide3.png", 
    caption: "A quiet moment just for us." 
  },
  { 
    id: 4, 
    url: "/public/slide4.png", 
    caption: "Adventures are better with you." 
  },
  { 
    id: 5, 
    url: "/public/slide5.png", 
    caption: "Simply beautiful." 
  },
];