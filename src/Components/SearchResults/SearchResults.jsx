import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";


function SearchResults({ tracks }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Search Results</h2>
            <TrackList tracks={tracks} />
        </div>
    );
}

export default SearchResults;