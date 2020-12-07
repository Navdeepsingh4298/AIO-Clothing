import React from 'react';

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
    <ErrorPageTitle>Page Not Found</ErrorPageTitle>
    <ErrorPageContent>
      The Page you're looking for is not Found <br />
      Please try again later...
    </ErrorPageContent>
    <CustomButton className='home-btn'>
      Go to Home Page
    </CustomButton>
  </ErrorPageContainer>
);

export default ErrorPage;