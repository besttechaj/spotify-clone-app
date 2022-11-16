import React, { useEffect,useState } from 'react'
import Login from './login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify= new SpotifyWebApi();

const App=()=>{
  //  const [token,setToken]=useState(null);
  const [{user,token},dispatch]=useDataLayerValue();

  useEffect(()=>{
const hash=getTokenFromUrl();
window.location.hash="";
const _token=hash.access_token;

if(_token){

  dispatch({
    type:"SET_TOKEN",
    token:_token,
  });
  //setToken(_token);

  spotify.setAccessToken(_token);

  spotify.getMe().then((user)=>{
    //console.log(user);
    //console.log(spotify.getMe());
    dispatch({
      type:'SET_USER',
      user:user,
    });
  });

  spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
      type:"SET_PLAYLISTS",
      playlists:playlists,
    });
  });
}

spotify.getPlaylist('63cUKsditPp0qT302gqxHz').then(response=>{
  dispatch({
    type:"SET_DISCOVER_WEEKLY",
    discover_weekly:response,
  
  });
});
//console.log("i have a token",token);
//eslint-disable-next-line react-hooks/exhaustive-deps
/* eslint-disable */
  },[]);

  // console.log("man logo",user);
  // console.log("alien",token)


  return(
    <div className='App'>
    {
      token?
        <Player spotify={spotify}/>
      :
        <Login/>

    }
    </div>
  );
}

export default App;
// d56e09ab7ca74dc1b7bd57b934e0f8e8