import { StoryBlock, SlidePhoto } from './types';

// MUSIC
// Put your music file in: public/music/song.mp3
export const MUSIC_URL = "/song.mp3"; 

// STORY SECTION
// Put these images in: public/images/
export const STORY_BLOCKS: StoryBlock[] = [
  {
    id: 1,
    title: "The Day We Met",
    content: "Hari pertama abam ketemu ade adalah salah satu hari paling bahagia dalam hidup abam. Cara ade merespon dengan begitu hangat bikin abam rasanya ingin terus ngobrol sampai pagi walaupun dag-dig-dug ser.",
    image: "/fist.png" // Replace with your actual filename
  },
  {
    id: 2,
    title: "The Moment I Realized...",
    content: "Setelah ngobrol cukup lama sama ade, abam mulai sadar ada perasaan yang pelan pelan tumbuh. Dan tanpa terasa, perasaan itu jadi cinta.",
    image: "/second.png" // Replace with your actual filename
  },
  {
    id: 3,
    title: "Today",
    content: "Setiap hari bersama ade membuat abam semakin bersyukur kepada Allah. Semoga cinta ini bukan hanya indah hari ini, tapi juga menjadi jalan menuju kebaikan dan keberkahan bersama.",
    image: "/third.png" // Replace with your actual filename
  }
];

// GALLERY SLIDESHOW
// Put these images in: public/images/
// Recommended size for mobile: 1080x1920 (Portrait)
export const GALLERY_PHOTOS: SlidePhoto[] = [
  { 
    id: 1, 
    url: "/slide1.png", // Replace with your actual filename
    caption: "Abam benar benar sayang ade" 
  },
  { 
    id: 2, 
    url: "/slide2.png", 
    caption: "Sayang abam tulus cuma buat ade" 
  },
  { 
    id: 3, 
    url: "/slide3.png", 
    caption: "Abam sayang ade selalu" 
  },
  { 
    id: 4, 
    url: "/slide4.png", 
    caption: "Ade yang paling abam sayang" 
  },
  { 
    id: 5, 
    url: "/slide5.png", 
    caption: "Hati abam cuma buat ade" 
  },
];