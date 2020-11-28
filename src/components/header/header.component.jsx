import React from 'react';
import { Link } from 'react-router-dom';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Stylesheet
import './header.styles.scss';

// functional arrow component
const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
)

export default Header;