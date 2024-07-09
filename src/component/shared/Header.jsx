import React, { useState } from 'react';
import IndexImages from '../../assets/images/images';
import { Link } from 'react-router-dom';
import { FaXmark } from 'react-icons/fa6';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const openNav = () => {
      setIsOpen(true);
    };
  
    const closeNav = () => {
      setIsOpen(false);
    };
  return (
    <>
    <section className='header'>
    <div className={`sidenav ${isOpen ? 'open' : ''}`} id="mySidenav">
        <div className='profile'>
          <div className='profile-data'>
            <img src={IndexImages.MenuUser} />  
            <div>
              <h3>Sam Cooke</h3>
              <p>User Profile</p>
            </div>
          </div>
          <div className='close'>
          <Link to="javascript:void(0)" className="closebtn" onClick={closeNav}><img src={IndexImages.Cross} /></Link>
          </div>
        </div>
        <div className='nav-links'>
          <Link to='/'><img src={IndexImages.MyAccount} /> My Account </Link>
          <Link to='/'><img src={IndexImages.AddNewPost} /> Add New Post </Link>
          <Link to='/'><img src={IndexImages.History} /> Listening History </Link>
          <Link to='/'><img src={IndexImages.AccountSetting} /> Account Settings </Link>
          <Link to='/'><img src={IndexImages.Logout} /> Logout </Link>
        </div>
      </div>
        <div className='cstm-toggle'>
            <img src={IndexImages.Toggle} onClick={openNav} alt='Toggle' />
        </div>
        <div className='logo'>
        <Link to="/">
            <img src={IndexImages.Logo} alt='Logo' />
            </Link>
        </div>
        <div className='icons'>
            <img src={IndexImages.User} alt='User' />
            <img src={IndexImages.Notification} alt='Notification' />
        </div>
    </section>
    </>
  )
}

export default Header;