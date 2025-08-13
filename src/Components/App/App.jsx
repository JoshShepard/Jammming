import Header from "../Header/Header";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: '1', name: 'Lose Yourself', artist: 'Eminem', album: '8 Mile' },
    { id: '2', name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours' },
    { id: '3', name: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia' },
  ]);
  return (
    <>
      <Header />
      <SearchResults tracks={searchResults} />
      <Playlist />
    </>
  );
}

export default App
