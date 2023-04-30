import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import React, { useState } from 'react';

function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'transparent',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon style={{color: '#2196f3' }} />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon style={{ color: '#2196f3' }} />} />
      <BottomNavigationAction label="Discoveries" icon={<ExploreIcon style={{ color: '#2196f3' }} />} />
      <BottomNavigationAction label="Space" icon={<SpaceBarIcon style={{ color: '#2196f3' }} />} />
    </BottomNavigation>
  );
}

export default NavBar;
