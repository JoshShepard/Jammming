function Track( { track }) {
    // Deconstruct the track object to get the properties we need
    const { name, artist, album } = track;
    return (
        <div>
            <h3>{name}</h3>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>
        </div>
    );
}

export default Track;
