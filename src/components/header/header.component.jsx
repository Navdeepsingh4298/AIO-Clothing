import React from 'react';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Logo
import { ReactComponent as Logo } from '../../assets/favicon.svg';

// Stylesheet
//import './header.styles.scss';

// Styled components
import { HeaderContainer, Heading, LogoContainer, OptionsContainer, OptionLink, BrandContainer } from './header.styles';

// functional arrow component
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <BrandContainer to="/">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Heading>AIO Clothing</Heading>
    </BrandContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
          (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
          :
          (<OptionLink to='/signin'>SIGN IN</OptionLink>)
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);