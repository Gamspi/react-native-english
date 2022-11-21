import {useCallback, useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
type Arguments = {
  checkIsFocused: () => boolean;
};
export const useController = ({checkIsFocused}: Arguments) => {
  const backAction = useCallback(() => {
    if (checkIsFocused()) {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    }
  }, [checkIsFocused]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [backAction]);
};
