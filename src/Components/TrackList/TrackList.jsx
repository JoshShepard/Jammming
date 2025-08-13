import Track from "../Track/Track";

function TrackList({tracks}) {
    // Empty results for tracks. Should not happen now with hardcoded data.
    if (!tracks || tracks.length === 0) {
        return <div>No results yet.</div>;
    }

    return (
        <div>
            {tracks.map(track => (
                <Track key={track.id} track={track} />
            ))}
        </div>
    );
}

export default TrackList;