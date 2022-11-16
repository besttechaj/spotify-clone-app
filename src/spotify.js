//this will use to jump to the authorization page of the spotify
export const authEndpoint="https://accounts.spotify.com/authorize";
//this is use to redirect again to our website after successful authorization
const redirectUri="http://localhost:3000/";

const clientId="7d16ae687d5a4183b88fa5f7af97cfc8";

//because of scope one can only read it but can't modify anything in the application
//we can see the currently playing,recently played,playback state and can only modify the playback state.
//scope only allow you to use the authorize things.eg you can't publish a new song in the application.
const scopes=[
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];


export const getTokenFromUrl=()=>{
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial,item)=>{
    let parts=item.split("=");
    initial[parts[0]]=
    decodeURIComponent(parts[1]);

    return initial;

  },{});
};

//now generating one long webpage link
export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;






