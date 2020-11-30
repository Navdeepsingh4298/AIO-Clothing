import React from 'react';

// Stylesheet
//import './homepage.styles.scss';

// component
import Directory from '../../components/directory/directory.component';

// styled component
import { HomePageContainer } from './homepage.styles';


const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
)

export default HomePage;