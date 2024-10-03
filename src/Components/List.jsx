import PropTypes from 'prop-types';
import Loading from './Loading';
import MusicItem from './MusicItem';

const List = ({ tracks, trackCLicked }) => {
  return (
    <div className="md:w-1/3 w-full md:h-full h-1/3 bg-[#EDDFE0] overflow-y-auto px-4">
      {!tracks && <Loading />}
      {tracks &&
        tracks.map((track, idx) => (
          <div key={idx} onClick={() => trackCLicked(idx)}>
            <MusicItem name={track.name} image={track.album.images[0].url} />
          </div>
        ))}
    </div>
  );
};

List.propTypes = {
  tracks: PropTypes.array,
  trackCLicked: PropTypes.func,
};

export default List;
