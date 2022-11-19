import {Alert} from 'react-native';
import {useState} from 'react';
import {useAction} from '../../../core/hooks/useActions';

export const useController = () => {
  const [word, setWord] = useState('');
  const [value, setValue] = useState('');
  const {setWordList} = useAction();
  const handlerAddWord = () => {
    if (word && value) {
      console.log({
        word,
        value,
      });
      setWordList({
        value,
        label: word,
        id: Date.now().toString(),
      });
      setWord('');
      setValue('');
    } else {
      Alert.alert('Error', 'Fill in all the fields');
    }
  };
  return {
    word,
    value,
    setWord,
    setValue,
    handlerAddWord,
  };
};
