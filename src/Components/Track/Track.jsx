import styles from "./Track.module.css";

function Track( { track, onAdd, onRemove, isRemoval }) {
    // Deconstruct the track object to get the properties we need
    const { name, artist, album } = track;

    const handleAdd = () => {
        onAdd(track)
    }

    const handleRemove = () => {
        onRemove(track);
    }
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.artist}>Artist: {artist}</p>
                <p className={styles.album}>Album: {album}</p>
            </div>
            {isRemoval ? <button onClick={handleRemove} className={styles.removeButton}>-</button> : <button onClick={handleAdd} className={styles.addButton}>+</button>}
        </div>
    );
}

export default Track;
