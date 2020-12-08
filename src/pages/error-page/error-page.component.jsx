import React from 'react';
import { Link } from 'react-router-dom';

// cutom button
import CustomButton from '../../components/custom-button/custom-button.component';

//Styled component
import {
  ErrorPageContainer,
  ErrorPageTitle,
  ErrorPageContent
} from './error-page.styles';

const ErrorPage = () => (
  <ErrorPageContainer>
    <ErrorPageTitle>Page Not Found <br /> Error 404</ErrorPageTitle>
    <ErrorPageContent>
      The Page you're looking for is not Found <br />
      Please try again later...
    </ErrorPageContent>
    <Link to='/'>
      <CustomButton className='home-btn'>
        Go to Home Page
    </CustomButton>
    </Link>
  </ErrorPageContainer>
);

export default ErrorPage;