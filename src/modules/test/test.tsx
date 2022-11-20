import React from 'react';
import {RefreshControl, ScrollView, Text} from 'react-native';
import Screen from '../core/component/screen/Screen';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const TestPage = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <Screen>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </Screen>
  );
};

export default TestPage;
