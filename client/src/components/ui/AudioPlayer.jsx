import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVERURL = import.meta.env.VITE_SERVERURL;

const AudioPlayer = ({ paragraph }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [audioLoaded, setAudioLoaded] = useState(false);


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
        setAudioLoaded(true);

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
    <>
      {audioLoaded ? < div >


        < button onClick={handlePlayPause} > {isPlaying ? 'Pause' : 'Play'}</button >
        <audio ref={audioRef} src={audioUrl} />

      </div > : <div className="flex items-center">
        <div className="h-2 w-2 rounded-full bg-gray-500 animate-bounce "></div>
        <div className="h-2 w-2 rounded-full bg-gray-500 animate-bounce mx-1 "></div>
        <div className="h-2 w-2 rounded-full bg-gray-500 animate-bounce "></div>
      </div>}

    </>
  );
};

export default AudioPlayer;
