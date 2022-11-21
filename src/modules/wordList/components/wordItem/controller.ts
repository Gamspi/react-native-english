import {useAction} from '../../../core/hooks/useActions';
import {Alert} from 'react-native';
import {useCallback, useState} from 'react';
import {Word} from '../../../core/types/word';
type Arguments = {
  id: string;
};
export function useController({id}: Arguments) {
  const {deleteWord, updateWord} = useAction();
  const [isActive, setIsActive] = useState(false);

  const handelDeleteWord = useCallback(() => {
    Alert.alert('Delete', 'Do you really wanna delete the word', [
      {
        text: 'Delete',
        onPress: () => {
          deleteWord(id);
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
    console.log(isInGame);
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
