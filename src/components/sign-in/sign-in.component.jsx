import React from 'react';

// Component
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// REDUX
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

// Stylesheet
//import './sign-in.styles.scss';
// styled component
import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

// google logo
import { ReactComponent as Glogo } from '../../assets/google-filled-border-logo.svg';

// class component
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              <span>Sign In with</span> <Glogo className='google-logo' />
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);