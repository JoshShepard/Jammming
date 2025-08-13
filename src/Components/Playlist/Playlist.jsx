import TrackList from "../TrackList/TrackList";
import styles from "./Playlist.module.css"; 

function Playlist({ playlistName, playlistTracks, onRemove }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.playlistName}>{playlistName}</h2>
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
        </div>
    );
}

export default Playlist;