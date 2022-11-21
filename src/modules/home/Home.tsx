import React, {memo} from 'react';
import HomeLayout from './layout/HomeLayout';

const Home = ({navigation}) => {
  return <HomeLayout checkIsFocused={navigation.isFocused} />;
};

export default memo(Home);
