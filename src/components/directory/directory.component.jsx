import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from 'reselect';

//Stylesheet
//import './directory.styles.scss';
// styled component
import { DirectoryMenuContainer } from './directory.styles';

// component
import MenuItem from '../menu-item/menu-item.component';

// Data file
//import SECTIONS_DATA from './sections.data.js';


const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id}  {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory); 