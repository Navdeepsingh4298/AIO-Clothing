import React from 'react';

// Stylesheet
//import './custom-button.styles.scss';

// Styled component
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
)
export default CustomButton;