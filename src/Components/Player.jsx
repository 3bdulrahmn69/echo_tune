import PropTypes from 'prop-types';
import { BsSpotify } from 'react-icons/bs';
import Waiting from './Waiting';
import CloseTrack from './CloseTrack';
import MusicPlayer from './MusicPlayer';

const Player = ({
  currentTrack,
  nextTrack,
  prevTrack,
  isPlaying,
  setIsPlaying,
  setCurrentTrack,
  tracks,
}) => {
  return (
    <div className="md:w-2/3 w-full md:h-full h-2/3 flex items-center justify-center">
      {!currentTrack && (
        <Waiting setCurrentTrack={setCurrentTrack} tracks={tracks} />
      )}
      {currentTrack && (
        <div className="w-5/6 px-8 py-8 m-24 relative animate-FadeIn">
          <CloseTrack setCurrentTrack={setCurrentTrack} />
          <a
            className="absolute md:top-1/2 top-0 right-8 bg-gray-200 p-1 rounded-full"
            href={currentTrack?.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <BsSpotify className="w-8 h-8 text-green-400" />
          </a>
          <MusicPlayer
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            nextTrack={nextTrack}
            prevTrack={prevTrack}
          />
        </div>
      )}
    </div>
  );
};

Player.propTypes = {
  currentTrack: PropTypes.object,
  nextTrack: PropTypes.func,
  prevTrack: PropTypes.func,
  isPlaying: PropTypes.bool,
  setIsPlaying: PropTypes.func,
  setCurrentTrack: PropTypes.func,
  tracks: PropTypes.array,
};

export default Player;
