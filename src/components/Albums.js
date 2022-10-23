function Albums (props) {

    return (
        <div  className="artist">
            <img src={props.src} className="album-img"/>
            <h3 className="artist-name album-info">{props.albumName}</h3>
            <h4 className="artist-name album-info">{props.artistName}</h4>
            <h4 className="artist-name album-info">{props.releaseDate}</h4>
            <h4 className="artist-name album-info">{props.numOfTracks}</h4>
            <div className="link-container">
                <h3 ><a href={props.ext} className="link">Preview on Spotify</a></h3>
            </div>
        </div>
    )
}

export default Albums