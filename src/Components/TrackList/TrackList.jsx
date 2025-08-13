import Track from "../Track/Track";
import styles from "./TrackList.module.css";

function TrackList({tracks, onAdd, onRemove, isRemoval}) {
    // Empty results for tracks. Should not happen now with hardcoded data.
    if (!tracks || tracks.length === 0) {
        return <div className={styles.noResults}>No results...</div>;
    }

    return (
        <div className={styles.container}>
            {tracks.map(track => (
                <Track key={track.id} track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />
            ))}
        </div>
    );
}

export default TrackList;