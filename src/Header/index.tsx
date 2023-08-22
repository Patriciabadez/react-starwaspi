import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './styles.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let headerStyle = {
    backgroundColor: scrolling || location.pathname.includes('/character-details') ? '#0e0b14' : 'transparent',
  };

  let pageTitle = 'Character List';

  if (location.pathname.includes('/character-details')) {
    pageTitle = 'Character Details';
  }

  return (
    <div className="header justify-content-around" style={headerStyle}>
      <h1 className='d-flex'>{pageTitle}</h1>
      {location.pathname.includes('/character-details') ? (
        <Link to="/character-list" className="back-button">Voltar</Link>
      ) : (
        <Link to="/" className="back-button">Voltar</Link>
      )}
      
    </div>
  );
};

export default Header;