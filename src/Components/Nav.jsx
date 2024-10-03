import PropTypes from 'prop-types';
import { FaGlobe, FaDesktop } from 'react-icons/fa';

const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <header>
      <nav className="w-full h-[40px] flex items-center justify-center">
        <ul className="flex items-center justify-center gap-1 bg-black/20 w-fit rounded-lg shadow-md">
          <li
            className={`flex items-center gap-1 px-3 py-1 text-white rounded-tl-lg rounded-bl-lg cursor-pointer duration-150 transition-transform ${
              activeTab === 'Online'
                ? 'bg-green-700/80 scale-105'
                : 'bg-black/20'
            }`}
            onClick={() => setActiveTab('Online')}
            role="button"
            aria-pressed={activeTab === 'Online'}
          >
            <FaGlobe /> Online
          </li>
          <li
            className={`flex items-center gap-1 px-3 py-1 text-white rounded-tr-lg rounded-br-lg cursor-pointer duration-150 transition-transform ${
              activeTab === 'Local'
                ? 'bg-green-700/80 scale-105'
                : 'bg-black/20'
            }`}
            onClick={() => setActiveTab('Local')}
            role="button"
            aria-pressed={activeTab === 'Local'}
          >
            <FaDesktop /> Local
          </li>
        </ul>
      </nav>
    </header>
  );
};

Nav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Nav;
