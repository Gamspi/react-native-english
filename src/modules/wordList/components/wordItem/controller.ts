import {useAction} from '../../../core/hooks/useActions';
import {Alert} from 'react-native';
import {useState} from 'react';

export function useController() {
  const {deleteWord} = useAction();
  const [isActive, setIsActive] = useState(false);
  const handelDeleteWord = id => {
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
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  return {
    isActive,
    toggleIsActive,
    handelDeleteWord,
  };
}
