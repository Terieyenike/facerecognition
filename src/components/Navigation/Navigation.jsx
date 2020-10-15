import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <>
      {isSignedIn ? (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p
            onClick={() => onRouteChange('signout')}
            className='f3 link dim black underline pa3 pointer'>
            Sign out
          </p>
        </nav>
      ) : (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p
            className='pa3 pointer dim black f3 link underline'
            onClick={() => onRouteChange('signin')}>
            Sign In
          </p>
          <p
            className='pa3 pointer dim black f3 link underline'
            onClick={() => onRouteChange('register')}>
            Register
          </p>
        </nav>
      )}
    </>
  );
};

export default Navigation;
