import Track from "../Track/Track";
import styles from "./TrackList.module.css";

function TrackList({tracks}) {
    // Empty results for tracks. Should not happen now with hardcoded data.
    if (!tracks || tracks.length === 0) {
        return <div className={styles.noResults}>No results...</div>;
    }

    return (
        <div className={styles.container}>
            {tracks.map(track => (
                <Track key={track.id} track={track} />
            ))}
        </div>
    );
}

export default TrackList;