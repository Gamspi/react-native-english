import {useTypeSelector} from '../../core/hooks/useTypeSelector';
import {useMemo, useState} from 'react';

export const useController = () => {
  const {words} = useTypeSelector(state => state.word);
  const [searchValue, setSearchValue] = useState('');
  const computedWords = useMemo(() => {
    if (searchValue) {
      return words.filter(
        elem =>
          elem.label.toLowerCase().includes(searchValue.toLowerCase()) ||
          elem.value
            .join(' ')
            .toLowerCase()
            .includes(searchValue.toLowerCase()),
      );
    }
    return words;
  }, [searchValue, words]);
  return {
    words,
    searchValue,
    computedWords,
    setSearchValue,
  };
};
