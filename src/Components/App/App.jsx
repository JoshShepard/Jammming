import Header from "../Header/Header";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";
import Track from "../Track/Track";
import TrackList from "../TrackList/TrackList"; 

function App() {
  return (
    <>
      <Header />
      <SearchResults />
      <TrackList />
      <Track />
      <Playlist />
    </>
  );
}

export default App
