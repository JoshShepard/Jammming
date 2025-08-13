import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css"; 

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange }) {
    const handleNameChange = event => {
        onNameChange(event.target.value);
    }
    return (
        <div className={styles.container}>
            <input className={styles.playlistNameInput} value={playlistName} onChange={handleNameChange} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
        </div>
    );
}

export default Playlist;