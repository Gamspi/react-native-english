import {Alert} from 'react-native';
import {useState} from 'react';
import {useAction} from '../../../core/hooks/useActions';

export const useController = () => {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const {addWord} = useAction();
  const handlerAddWord = () => {
    if (label && value) {
      addWord({
        label,
        value,
      });
    } else {
      Alert.alert('Error', 'Fill in all the fields');
    }
  };
  return {
    label,
    value,
    setLabel,
    setValue,
    handlerAddWord,
  };
};
