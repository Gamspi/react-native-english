import {useAction} from '../../../core/hooks/useActions';
import {Alert} from 'react-native';

export function useController() {
  const {deleteWord} = useAction();
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
  return {
    handelDeleteWord,
  };
}
