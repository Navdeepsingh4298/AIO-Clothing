import React from 'react';

// For Routing
import { Route } from 'react-router-dom';

// Data file
//import SHOP_DATA from './shop.data.js';

// component
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);


export default ShopPage;
