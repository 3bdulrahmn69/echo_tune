import PropTypes from 'prop-types';

const MusicItem = ({ name, image }) => {
  return (
    <div>
      <div className="flex items-center space-x-4 glass px-4 py-2 my-4 rounded-md cursor-pointer">
        <img className="w-12 h-12 rounded-full" src={image} alt="music" />
        <p className="text-lg font-semibold" title={name}>
          {name.length > 40 ? name.substring(0, 40) + '...' : name}
        </p>
      </div>
    </div>
  );
};

MusicItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default MusicItem;
