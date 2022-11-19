import React from 'react';
import CoreLayout from './layout/layout';
import {Provider} from 'react-redux';
import {store} from './store/store';

const Core = () => {
  return (
    <Provider store={store}>
      <CoreLayout />
    </Provider>
  );
};

export default Core;
