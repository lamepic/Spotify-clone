import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlistId }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log(hash);
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    spotify.getPlaylist(playlistId).then(response => {
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response,
      })
    })

  }, []);

  useEffect(() => {
    if (user) {
      fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.items.length >= 1) {
            dispatch({
              type: "SET_PLAYLISTID",
              playlistId: result.items[0].id,
            });
          }
        });
    }
  });

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
