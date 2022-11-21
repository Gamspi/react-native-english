import {Alert} from 'react-native';
import {useCallback, useMemo, useState} from 'react';
import {useAction} from '../../../core/hooks/useActions';
import {typeTab} from '../../constants/constants';
import {useTypeSelector} from '../../../core/hooks/useTypeSelector';
import {
  arrayValueTransformation,
  valueTransformation,
} from '../../../core/utils/helpers/valueTransformation';

export const useController = () => {
  const {addWord, updateWord} = useAction();
  const {words} = useTypeSelector(state => state.word);

  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [isInGame, setIsInGame] = useState(true);
  const [type, setType] = useState(typeTab.length ? typeTab[0].valueType : '');
  const [activeCheckboxId, setActiveCheckboxId] = useState(
    typeTab.length ? typeTab[0].id : 1,
  );
  const handlerEnglishOnInput = useCallback(
    e => setLabel(e.replace(/([^a-z\s'])|(\s(?=\s))|('(?='))/gi, '')),
    [],
  );
  const handelSetIsInGame = useCallback(() => {
    setIsInGame(!isInGame);
  }, [isInGame]);

  const handlerChooserType = useCallback(
    ({valueType, id}: typeof typeTab[0]) => {
      setActiveCheckboxId(id);
      setType(valueType.toLowerCase());
    },
    [],
  );

  const handelClearInputs = useCallback(() => {
    setLabel('');
    setValue('');
    setType(typeTab.length ? typeTab[0].valueType : '');
  }, []);

  const addLabel = useMemo(() => valueTransformation(label), [label]);
  const addValue = useMemo(
    () => [...arrayValueTransformation(value.split(','))],
    [value],
  );

  const addType = useMemo(() => valueTransformation(type), [type]);

  const word = useMemo(
    () =>
      words.find(
        elem =>
          elem.label.toLowerCase() === label.toLowerCase().trim() &&
          elem.type === type.toLowerCase(),
      ),
    [label, type, words],
  );

  const isValue = useMemo(() => {
    if (word) {
      for (let i = 0; i < addValue.length; i++) {
        if (word.value.includes(addValue[i])) {
          return true;
        }
      }
    }
    return false;
  }, [addValue, word]);
  const wordWithMeaningAlert = useCallback(() => {
    Alert.alert('Error', 'A word with this meaning already exists');
  }, []);

  const alertExistWord = useCallback(
    existWord => {
      Alert.alert(
        'This word already exists',
        'Do you wanna add another value?',
        [
          {
            text: 'Yes',
            style: 'default',
            onPress: () => {
              updateWord({
                ...existWord,
                value: [...existWord.value, ...addValue],
              });
              handelClearInputs();
            },
          },
          {
            text: 'No',
            style: 'default',
          },
        ],
      );
    },
    [addValue, handelClearInputs, updateWord],
  );

  const handlerAddWord = useCallback(() => {
    if (addLabel && addType && addValue.length) {
      if (word) {
        if (isValue) {
          wordWithMeaningAlert();
        } else {
          alertExistWord(word);
        }
      } else {
        addWord({
          label: addLabel,
          value: addValue,
          type: addType,
          isInGame,
        });
        handelClearInputs();
      }
    } else {
      Alert.alert('Error', 'Fill in all the fields');
    }
  }, [
    addLabel,
    addType,
    addValue,
    addWord,
    alertExistWord,
    handelClearInputs,
    isInGame,
    isValue,
    word,
    wordWithMeaningAlert,
  ]);

  return {
    handelSetIsInGame,
    isInGame,
    label,
    value,
    activeCheckboxId,
    handlerChooserType,
    handlerEnglishOnInput,
    setValue,
    handlerAddWord,
  };
};
