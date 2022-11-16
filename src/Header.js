import React from 'react'
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDataLayerValue } from './DataLayer';
function Header() {
  const [{ user }, dispatch]=useDataLayerValue();
  return (
    <div className='header'>
      <div className='header_left'>
        <SearchOutlinedIcon/>
        <input placeholder='Search for Artists,Songs or Albums' type="text"/>
      </div>


      <div className='header_right'>
        <AccountCircleIcon src={user?.images[0]?.url} alt={user?.display_name} />
        <h3>{user?.display_name}</h3>
      </div>
    </div>
  );
}

export default Header
