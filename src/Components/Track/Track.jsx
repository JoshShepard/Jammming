import styles from "./Track.module.css";

function Track( { track }) {
    // Deconstruct the track object to get the properties we need
    const { name, artist, album } = track;
    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.artist}>Artist: {artist}</p>
            <p className={styles.album}>Album: {album}</p>
        </div>
    );
}

export default Track;
