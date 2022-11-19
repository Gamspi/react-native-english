import {Alert} from 'react-native';
import {useState} from 'react';
import {useAction} from '../../../core/hooks/useActions';
import {typeTab} from '../../constants/constants';

export const useController = () => {
  const {addWord} = useAction();

  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [activeCheckboxId, setActiveCheckboxId] = useState(1);

  const handlerChooserType = ({valueType, id}: typeof typeTab[0]) => {
    setActiveCheckboxId(id);
    setType(valueType.toLowerCase());
  };
  const handlerAddWord = () => {
    if (label && value) {
      addWord({
        label: label.toLowerCase(),
        value: value.toLowerCase(),
        type: type.toLowerCase(),
      });
    } else {
      Alert.alert('Error', 'Fill in all the fields');
    }
  };
  return {
    label,
    value,
    activeCheckboxId,
    handlerChooserType,
    setLabel,
    setValue,
    handlerAddWord,
  };
};
