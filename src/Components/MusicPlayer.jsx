import PropTypes from 'prop-types';
import CustomAudio from './CustomAudio';

const MusicPlayer = ({
  currentTrack,
  nextTrack,
  prevTrack,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <div>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backgroundImage: `url('${currentTrack?.album.images[0].url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(7px)',
          borderRadius: '1rem',
          position: 'absolute',
          width: '98%',
          height: '98%',
          top: '6px',
          left: '8px',
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1,
          border: '2px solid #00000030',
          borderRadius: '1rem',
        }}
      ></div>
      <div className="w-full flex items-center justify-center">
        <img
          className={`md:h-60 sm:52 h-24 md:w-60 sm:w-52 w-24 lg:w-80 lg:h-80 rounded-full border-2 border-white ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
          src={currentTrack?.album.images[0].url}
          alt={currentTrack?.name}
        />
      </div>
      <div className="w-full h-1/2 flex flex-col justify-center items-center">
        <h1
          className="md:text-2xl text-lg font-bold text-white bg-black/40 rounded-md px-2 py-1 my-2"
          title={currentTrack?.name}
        >
          {currentTrack?.name.length > 40
            ? currentTrack?.name.substring(0, 40) + '...'
            : currentTrack?.name}
        </h1>
        <h2
          className="md:text-lg text-sm text-gray-300 bg-black/20 rounded-md px-2 py-1 mb-2"
          title={currentTrack?.artists[0].name}
        >
          {currentTrack?.artists[0].name.length > 10
            ? currentTrack?.artists[0].name.substring(0, 10) + '...'
            : currentTrack?.artists}
        </h2>
        <CustomAudio
          src={currentTrack?.preview_url}
          nextTrack={nextTrack}
          prevTrack={prevTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
};

MusicPlayer.propTypes = {
  currentTrack: PropTypes.object,
  nextTrack: PropTypes.func,
  prevTrack: PropTypes.func,
  isPlaying: PropTypes.bool,
  setIsPlaying: PropTypes.func,
};

export default MusicPlayer;
