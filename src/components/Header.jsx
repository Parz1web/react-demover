import React from 'react';
import Logo from '../img/logo.png'

const header = () => {
    return (
        <header className='header'>
          <img src={Logo}/>
        </header>
    );
};

export default header;