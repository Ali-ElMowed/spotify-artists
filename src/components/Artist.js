import React from "react";

function Artist(props) {
  return (
    <div className="artist" onClick={props.onClick}>
      <img src={props.src} className="artist-img" />
      <h2 className="artist-name artist-info">{props.artistName}</h2>
      <div className="artist-details artist-info">
        <h5 className="artist-name ">{props.followers}</h5>
        <h5 className="artist-name ">followers</h5>
      </div>
      <h5 className="artist-name popu artist-info">
        {props.popularity > 80 && (
          <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        )}
        {props.popularity < 80 && props.popularity > 60 && (
          <div>&#9733; &#9733; &#9733; &#9733;</div>
        )}
        {props.popularity < 60 && props.popularity > 40 && (
          <div>&#9733; &#9733; &#9733;</div>
        )}
        {props.popularity < 40 && props.popularity > 20 && (
          <div>&#9733; &#9733;</div>
        )}{" "}
        {props.popularity < 20 && <div>&#9733;</div>}
      </h5>
    </div>
  );
}

export default Artist;
