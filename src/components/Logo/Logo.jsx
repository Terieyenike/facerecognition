import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './brain.png';

export const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 50 }}
        style={{ height: 150, width: 150, borderRadius: '5em' }}>
        <div className='Tilt-inner pa4'>
          <img
            style={{ paddingTop: '5px' }}
            src={logo}
            alt='smart brain logo'
          />
        </div>
      </Tilt>
    </div>
  );
};
