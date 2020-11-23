export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-93b2b.web.app/"

const clientId = "7ae26f35e6f84ea9b90ad3dfec27a957";

const scopes = [
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-read-currently-playing",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {});
}

