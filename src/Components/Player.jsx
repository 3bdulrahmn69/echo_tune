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
  closeTrack
}) => {
  return (
    <div className="md:w-2/3 w-full md:h-full h-2/3 flex items-center justify-center">
      {!currentTrack && (
        <Waiting setCurrentTrack={setCurrentTrack} tracks={tracks} />
      )}
      {currentTrack && (
        <div className="w-5/6 px-8 py-8 m-24 relative animate-FadeIn">
          <CloseTrack closeTrack={closeTrack} />
          {currentTrack?.external_urls?.spotify && (
            <a
              className="absolute md:top-1/2 top-0 right-8 bg-gray-200 p-1 rounded-full"
              href={currentTrack.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${currentTrack.name} on Spotify`}
            >
              <BsSpotify className="w-8 h-8 text-green-400" />
            </a>
          )}
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
  currentTrack: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
    album: PropTypes.object,
    artists: PropTypes.array,
    preview_url: PropTypes.string,
  }),
  nextTrack: PropTypes.func.isRequired,
  prevTrack: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      album: PropTypes.object,
      artists: PropTypes.array,
      preview_url: PropTypes.string,
    })
  ).isRequired,
  closeTrack: PropTypes.func.isRequired,
};

export default Player;
