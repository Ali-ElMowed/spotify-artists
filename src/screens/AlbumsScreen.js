import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtistAlbums } from "../apis/artists";
import Albums from "../components/Albums";

function AlbumsScreen() {
  const [artistAlbums, setArtistsAlbums] = useState([]);
  const [ext, setExt] = useState(localStorage.getItem("ext"));

  const { id , name} = useParams();
  //Getting all the targeted artist's albums and store them in albums
  useEffect(() => {
    const handleGetAlbums = async () => {
      try {
        const token = localStorage.getItem("token");
        const albums = await getArtistAlbums(id,token);
        setArtistsAlbums(albums.items);
      } catch (error) {
        console.log(error);
      }
    }
    handleGetAlbums()
  }, []);

  return (

    <div>

    <h1 className="artist-name-title">
      {name}
    </h1>
    <h3 className="album-name-title">
      Albums
    </h3>
    <div className="artists">

    {artistAlbums.map((album) => (
      <Albums
        key={album.id}
        src={album.images[0].url}
        albumName={album.name}
        artistName={album.artists[0].name}
        releaseDate={album.release_date}
        numOfTracks={album.total_tracks}
        ext={ext}
      />)) }
    </div>
  
    </div>
    )
 
}
export default AlbumsScreen;
