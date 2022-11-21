import {useCallback, useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationEnum} from '../../core/utils/enums/navigation';
import {useTypeSelector} from '../../core/hooks/useTypeSelector';
type Arguments = {
  checkIsFocused: () => boolean;
};
export const useController = ({checkIsFocused}: Arguments) => {
  const {words} = useTypeSelector(state => state.word);
  const navigation = useNavigation<any>(); //TODO доделать тип
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

  const handelStartGame = useCallback(() => {
    const inGameWords = words.filter(elem => elem.isInGame);
    if (inGameWords.length) {
      navigation.navigate(NavigationEnum.GAME);
    } else {
      Alert.alert('Error', 'You need to choose at least one word for the game');
    }
  }, [navigation, words]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [backAction]);
  return {
    handelStartGame,
  };
};
