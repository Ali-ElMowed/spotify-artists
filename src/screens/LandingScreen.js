import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getArtists } from "../apis/artists";
import Artist from "../components/Artist";
import Search from "../components/Search";

function LandingScreen() {
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  //Keep the search results after press back from albums screen
  useEffect(() => {
    const search = async () => {
      try {
        const token = localStorage.getItem("token");
        const key = localStorage.getItem("searchKey");
        setSearchKey(key);
        const artists = await getArtists(key, token);
        setArtists(artists?.artists?.items);
      } catch (error) {
        console.log(error);
      }
    };
    if (localStorage.getItem("searchKey")) {
      search();
    }
  }, []);

  //Getting all the targeted artists and store them in artist
  const handleGetArtist = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      localStorage.setItem("searchKey", searchKey);
      const artists = await getArtists(searchKey, token);
      setArtists(artists?.artists?.items);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
    <div className="logout">

      <button onClick={handleLogout}>Logout</button>
    </div>
      <Search
        value={searchKey}
        onSubmit={handleGetArtist}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <div className="artists">
        {artists?.map((artist) => (
          <div>
            <Artist
              key={artist.id}
              onClick={
                () => {
                  localStorage.setItem("ext", artist.external_urls.spotify);
                  navigate(`/artist/${artist.id}/${artist.name}`);
                }
              }
              src={
                artist.images.length
                  ? artist.images[0].url
                  : "https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg"
              }
              artistName={artist.name}
              followers={artist.followers.total}
              popularity={artist.popularity}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default LandingScreen;
