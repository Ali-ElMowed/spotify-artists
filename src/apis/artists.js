import axios from "axios";

export const getArtists = async (searchKey, token) => {
  const { data } = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: searchKey,
      type: "artist",
    },
  });
  return data;
};

export const getArtistAlbums = async (id, token) => {
  const { data } = await axios.get(
    `https://api.spotify.com/v1/artists/${id}/albums`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
