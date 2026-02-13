import React, { useEffect, useRef, useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { MUSIC_URL } from '../constants';

interface MusicPlayerProps {
  shouldPlay: boolean; // Trigger from parent when user interacts
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  // Attempt to play when shouldPlay becomes true (initial interaction)
  useEffect(() => {
    if (shouldPlay && !userHasInteracted && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setUserHasInteracted(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            // We don't force it; user can click the button later
          });
      }
    }
  }, [shouldPlay, userHasInteracted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio ref={audioRef} src={MUSIC_URL} loop />
      <button
        onClick={toggleMusic}
        className="bg-white/30 backdrop-blur-md border border-rose-200 text-rose-800 p-3 rounded-full hover:bg-rose-100 transition-all shadow-lg hover:scale-105"
        aria-label="Toggle music"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;