import React from 'react'
import './Footer.css'
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import { Grid, Slider } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
     <div className='footer_left'>
      <img className='footer_albumLogo' src='https://media.istockphoto.com/photos/group-of-kindergarten-kids-lying-on-the-grass-at-park-and-relax-with-picture-id671260158?b=1&k=20&m=671260158&s=170667a&w=0&h=Cq10bsFaIZHZDBIHgTU7uSMs4mESkQHvaE61c6UIlco='/>
      <div className='footer_songInfo'>
        <h4>Yeah!</h4>
        <p>Usher</p>
      </div>
     </div>
     <div className='footer_center'>
     <ShuffleRoundedIcon className='footer_green'/>
     <SkipPreviousRoundedIcon className='footer_icon'/>
     <PlayCircleOutlineRoundedIcon fontSize='large' className='footer_icon'/>
     <SkipNextRoundedIcon className='footer_icon'/>
     <RepeatRoundedIcon className='footer_green'/>
    </div>

     <div className='footer_right'>
       <Grid container spacing={2}>
            <Grid item>
              <PlaylistAddIcon/>
            </Grid>

            <Grid item>
              <VolumeDownIcon/>
            </Grid>

            <Grid item xs>
              <Slider/>
            </Grid>

       </Grid>
     </div>
    </div>
  )
}

export default Footer
