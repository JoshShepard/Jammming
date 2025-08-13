import Header from "../Header/Header";
import SearchResults from "../SearchResults/SearchResults";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: '1', name: 'Lose Yourself', artist: 'Eminem', album: '8 Mile' },
    { id: '2', name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours' },
    { id: '3', name: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia' },
    { id: '4', name: 'Bad Guy', artist: 'Billie Eilish', album: 'When We All Fall Asleep, Where Do We Go?' },
    { id: '5', name: 'Shape of You', artist: 'Ed Sheeran', album: 'Divide' },
    { id: '6', name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', album: 'Uptown Special' },
    { id: '7', name: 'Rolling in the Deep', artist: 'Adele', album: '21' },
    { id: '8', name: 'Happy', artist: 'Pharrell Williams', album: 'G I R L' }
  ]);
  return (
    <>
      <Header />
      <SearchResults tracks={searchResults} />
    </>
  );
}

export default App
