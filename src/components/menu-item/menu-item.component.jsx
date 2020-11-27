import React from 'react';
import { withRouter } from 'react-router-dom';

// Stylesheet
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item `}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>

)

export default withRouter(MenuItem);

// withRouter is a Higher order function which it takes other component as an arguement
// and transform into another component and returns that transformed component.