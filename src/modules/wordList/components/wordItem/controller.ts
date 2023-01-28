import {useAction} from '../../../core/hooks/useActions';
import {Alert, Animated, View} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Word} from '../../../core/types/word';
import {useNavigation} from '@react-navigation/native';
import {NavigationEnum} from '../../../core/utils/enums/navigation';

type Arguments = {
  id: string;
};

export function useController({id}: Arguments) {
  const {deleteWord, updateWord} = useAction();
  const [isActive, setIsActive] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;
  const navigate = useNavigation<any>(); //TODO доделать тип
  const AnimationView = Animated.createAnimatedComponent(View);
  const handlerAnimateActive = useCallback(
    (toValue: number) =>
      Animated.timing(animationValue, {
        isInteraction: undefined,
        useNativeDriver: false,
        toValue: toValue,
        duration: 300,
      }).start(),
    [animationValue],
  );
  const animationStyles = {
    maxHeight: animationValue.interpolate({
      inputRange: [0, 100],
      outputRange: [250, 0],
      extrapolate: 'clamp',
    }),
  };
  useEffect(() => {
    console.log(isActive);
    isActive ? handlerAnimateActive(0) : handlerAnimateActive(100);
  }, [handlerAnimateActive, isActive]);

  const handelDeleteWord = useCallback(() => {
    Alert.alert('Alert', 'What du you wanna do?', [
      {
        text: 'Delete',
        onPress: () => {
          deleteWord(id);
        },
        style: 'default',
      },
      {
        text: 'Update',
        onPress: () => {
          navigate.navigate(NavigationEnum.ADD_WORD, {
            id,
          });
        },
        style: 'default',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  }, [deleteWord, id, navigate]);

  const toggleIsInGame = ({isInGame, ...item}: Word) => {
    updateWord({
      ...item,
      isInGame: !isInGame,
    });
  };
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  return {
    animationStyles,
    toggleIsInGame,
    toggleIsActive,
    handelDeleteWord,
    AnimationView,
  };
}
