import React, { useState, useEffect } from "react";

export const useAudio = (url, volume) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    audio.volume = volume;
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return { toggle };
};
