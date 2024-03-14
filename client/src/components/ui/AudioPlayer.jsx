import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVERURL = import.meta.env.VITE_SERVERURL;

const AudioPlayer = ({ paragraph }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');

  const audioRef = React.useRef(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.post(`${SERVERURL}/textToSpeech`, { data: paragraph }, {
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        // Check if the HTTP response is not successful
        if (response.status !== 200) {
          throw new Error('Request failed');
        }
  
        // Convert ArrayBuffer to Blob
        const blob = new Blob([response.data], { type: 'audio/mpeg' });
  
        // Create a URL for the audio Blob
        const url = URL.createObjectURL(blob);
  
        // Set the audio URL
        setAudioUrl(url);
  
        // Start playing the audio
        setIsPlaying(false);
      } catch (error) {
        console.error('Error fetching audio:', error);
      }
    };
  
    fetchAudio();
  }, [paragraph])

  const handlePlayPause = () => {
    const audioElement = audioRef.current;

    // console.log(audioElement);

    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setIsPlaying(true);
      } else {
        audioElement.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      {/* <button onClick={fetchAudio}>Play Audio</button> */}
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} />
      )}
    </div>
  );
};

export default AudioPlayer;
