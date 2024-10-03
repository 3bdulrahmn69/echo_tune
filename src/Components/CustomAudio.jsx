import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

const CustomAudio = ({
  src,
  prevTrack,
  nextTrack,
  setIsPlaying,
  isPlaying,
}) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  const handleNextTrack = () => {
    nextTrack();
  };

  const handlePrevTrack = () => {
    prevTrack();
  };

  return (
    <div className="w-full md:px-16 px-4">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnd}
      />
      <div className="flex items-center justify-center md:flex-row flex-col">
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="w-[80%] h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer transition-colors hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          style={{
            background: `linear-gradient(to right, rgba(34,197,94,1) ${
              (currentTime / duration) * 100 || 0
            }%, rgba(100,100,100,1) ${(currentTime / duration) * 100 || 0}%)`,
          }}
          aria-label="Seek Slider"
        />
        <p className="text-white bg-black/35 px-2 py-1 rounded-md md:text-base text-sm md:my-0 my-2">
          {Math.floor(currentTime)} / {Math.floor(duration)}
        </p>
      </div>

      <div className="w-full flex justify-between">
        <button
          onClick={handlePrevTrack}
          className="w-10 h-10 bg-gray-300 text-black rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
        >
          <FaBackward />
        </button>
        <button
          onClick={handlePlayPause}
          className={`w-10 h-10 ${
            isPlaying ? 'bg-green-400 text-white hover:bg-green-300' : 'bg-gray-300 text-black hover:bg-gray-400'
          }  rounded-full flex items-center justify-center transition-colors`}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={handleNextTrack}
          className="w-10 h-10 bg-gray-300 text-black rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
        >
          <FaForward />
        </button>
      </div>
    </div>
  );
};

CustomAudio.propTypes = {
  src: PropTypes.string,
  prevTrack: PropTypes.func,
  nextTrack: PropTypes.func,
  setIsPlaying: PropTypes.func,
  isPlaying: PropTypes.bool,
};

export default CustomAudio;
