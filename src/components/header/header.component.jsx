import React from 'react';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

// Logo
import { ReactComponent as Logo } from '../../assets/favicon.svg';

// Stylesheet
//import './header.styles.scss';

// Styled components
import {
  HeaderContainer,
  Heading,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  BrandContainer
} from './header.styles';

// functional arrow component
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <BrandContainer to="/">
      <LogoContainer>
        <Logo className='logo' />
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
          (<OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>)
          :
          (<OptionLink to='/signin'>SIGN IN</OptionLink>)
      }
      {
        currentUser && (<CartIcon />)
      }
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);