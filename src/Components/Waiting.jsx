import PropTypes from 'prop-types';

const Waiting = ({ setCurrentTrack, tracks }) => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <p>
        Click on a track to start listening{' '}
        <span role="img" aria-label="headphones">
          🎧
        </span>
      </p>
      <p className="text-gray-500 my-2">OR</p>
      <button
        onClick={() =>
          setCurrentTrack(tracks[Math.floor(Math.random() * tracks.length)])
        }
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Play Random One
      </button>
    </div>
  );
};

Waiting.propTypes = {
  setCurrentTrack: PropTypes.func,
  tracks: PropTypes.array,
};

export default Waiting;
