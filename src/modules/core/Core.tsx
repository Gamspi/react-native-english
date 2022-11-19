import React, {useEffect} from 'react';
import CoreLayout from './layout/layout';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {useAction} from './hooks/useActions';

const Core = () => {
  return (
    <Provider store={store}>
      <CoreLayout />
    </Provider>
  );
};

export default Core;
