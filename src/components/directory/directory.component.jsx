import React from 'react';

//Stylesheet
import './directory.styles.scss';

// component
import MenuItem from '../menu-item/menu-item.component';

// Data file
import SECTIONS_DATA from './sections.data.js';

// class component
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {
          sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id}  {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory; 