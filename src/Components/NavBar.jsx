import { useState } from 'react';

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '60px',
        zIndex: 100,
      }}
    >
      <button
        onClick={() => handleNavClick(0)}
        style={{
          color: activeIndex === 0 ? '#2196f3' : 'white',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Home
      </button>
      <button
        onClick={() => handleNavClick(1)}
        style={{
          color: activeIndex === 1 ? '#2196f3' : 'white',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
      <button
        onClick={() => handleNavClick(2)}
        style={{
          color: activeIndex === 2 ? '#2196f3' : 'white',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Discoveries
      </button>
      <button
        onClick={() => handleNavClick(3)}
        style={{
          color: activeIndex === 3 ? '#2196f3' : 'white',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Space
      </button>
    </div>
  );
}

export default NavBar;
