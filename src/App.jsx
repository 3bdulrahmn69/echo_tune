import { useEffect, useState } from 'react';
import get_tracks from './Services/get_tracks';
import List from './Components/List';
import Player from './Components/Player';

const App = () => {
  const [tracks, setTracks] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    async function fetchTracks() {
      const tracks = await get_tracks();
      setTracks(tracks);
    }

    fetchTracks();
  }, []);

  function handleTrackClicked(idx) {
    setCurrentTrack(tracks[idx]);
    setIsPlaying(false);
  }

  function handleNextTrack() {
    const idx = tracks.indexOf(currentTrack);
    if (idx < tracks.length - 1) {
      setCurrentTrack(tracks[idx + 1]);
      setIsPlaying(false);
    }
  }

  function handlePrevTrack() {
    const idx = tracks.indexOf(currentTrack);
    if (idx > 0) {
      setCurrentTrack(tracks[idx - 1]);
      setIsPlaying(false);
    }
  }

  return (
    <div className="h-screen overflow-hidden">
      <main className="w-full h-screen flex md:flex-row flex-col">
        <Player
          currentTrack={currentTrack}
          nextTrack={handleNextTrack}
          prevTrack={handlePrevTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setCurrentTrack={setCurrentTrack}
          tracks={tracks}
        />
        <List tracks={tracks} trackCLicked={handleTrackClicked} />
      </main>
    </div>
  );
};

export default App;
