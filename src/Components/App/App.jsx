import Header from "../Header/Header";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  // Search results hardcoded for testing purposes
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

  // Playlist name and tracks hardcoded for testing purposes
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = track => {
    const trackExists = playlistTracks.some(playlistTrack => playlistTrack.id === track.id);
    // Check if the track is already in the playlist
    if (trackExists) {
      console.log(`Track ${track.name} is already in the playlist.`);
      return; // Do nothing
    }

    // Add track to playlist
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  }

  const removeTrackFromPlaylist = track => {
    setPlaylistTracks(prevTracks => prevTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const changePlaylistName = newName => {
    setPlaylistName(newName);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
          <SearchResults tracks={searchResults} onAdd={addTrackToPlaylist} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrackFromPlaylist} onNameChange={changePlaylistName} />
      </div>
    </>
  );
}

export default App
