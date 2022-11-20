import {Alert} from 'react-native';
import {useState} from 'react';
import {useAction} from '../../../core/hooks/useActions';
import {typeTab} from '../../constants/constants';
import {useTypeSelector} from '../../../core/hooks/useTypeSelector';
import {
  arrayValueTransformation,
  valueTransformation,
} from '../../../core/utils/helpers/valueTransformation';

export const useController = () => {
  const {addWord} = useAction();
  const {words} = useTypeSelector(state => state.word);

  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState(typeTab.length ? typeTab[0].valueType : '');
  const [activeCheckboxId, setActiveCheckboxId] = useState(
    typeTab.length ? typeTab[0].id : 1,
  );

  const handlerChooserType = ({valueType, id}: typeof typeTab[0]) => {
    setActiveCheckboxId(id);
    setType(valueType.toLowerCase());
  };

  const handelClearInputs = () => {
    setLabel('');
    setValue('');
    setType(typeTab.length ? typeTab[0].valueType : '');
  };

  const handlerAddWord = () => {
    const addLabel = valueTransformation(label);
    const addValue = [...arrayValueTransformation(value.split(','))];
    const addType = valueTransformation(type);
    if (addLabel && addType && addValue.length) {
      const word = words.find(
        elem => elem.label.toLowerCase() === label.toLowerCase().trim(),
      );
      if (word) {
        console.log(word);
        handelClearInputs();
      } else {
        addWord({
          label: addLabel,
          value: addValue,
          type: addType,
        });
        handelClearInputs();
      }
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
