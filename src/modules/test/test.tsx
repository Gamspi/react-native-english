import React, {useState} from 'react';
import {RefreshControl, ScrollView, Switch, Text} from 'react-native';
import Screen from '../core/component/screen/Screen';

const TestPage = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Screen>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Screen>
  );
};

export default TestPage;
