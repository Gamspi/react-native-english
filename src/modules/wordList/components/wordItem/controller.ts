import {useAction} from '../../../core/hooks/useActions';
import {Alert} from 'react-native';
import {useCallback, useState} from 'react';
import {Word} from '../../../core/types/word';
import {useNavigation} from '@react-navigation/native';
import {NavigationEnum} from '../../../core/utils/enums/navigation';
type Arguments = {
  id: string;
};
export function useController({id}: Arguments) {
  const {deleteWord, updateWord} = useAction();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigation<any>(); //TODO доделать тип
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
  }, [deleteWord, id]);

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
    toggleIsInGame,
    isActive,
    toggleIsActive,
    handelDeleteWord,
  };
}
