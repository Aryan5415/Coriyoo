import React from 'react';
import IndexImages from '../../assets/images/images';

function Header() {
  return (
    <>
    <section className='header'>
        <div className='cstm-toggle'>
            <img src={IndexImages.Toggle} alt='Toggle' />
        </div>
        <div className='logo'>
            <img src={IndexImages.Logo} alt='Logo' />
        </div>
        <div className='icons'>
            <img src={IndexImages.User} alt='User' />
            <img src={IndexImages.Notification} alt='Notification' />
        </div>
    </section>
    </>
  )
}

export default Header