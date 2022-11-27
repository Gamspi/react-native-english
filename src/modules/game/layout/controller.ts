import {useTypeSelector} from '../../core/hooks/useTypeSelector';
import {useEffect, useState} from 'react';
import {generationRandom} from '../../core/utils/helpers/generationRandom';
import {Word} from '../../core/types/word';

export const useController = () => {
  const {words} = useTypeSelector(state => state.word);
  const [index, setIndex] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [questionWords, setQuestionWords] = useState<Word[]>([]);
  const [word, setWord] = useState<Word | null>(null);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setQuestionWords(words.filter(elem => elem.isInGame));
  }, [words]);

  useEffect(() => {
    setWord(questionWords[index]);
  }, [index, questionWords]);

  const updateWord = () => {
    setAnswer('');
    setIndex(generationRandom(questionWords));
  };
  const handelShowAnswer = () => {
    setIsShowAnswer(true);
  };

  const handelSubmit = () => {
    if (word && word.label === answer.toLowerCase().trim()) {
      setIsSuccess(true);
      setIsDisabled(true);
      setIsShowAnswer(false);
      setTimeout(() => {
        setIsSuccess(false);
        setIsDisabled(false);
        updateWord();
        setAnswer('');
      }, 600);
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 500);
    }
  };
  return {
    isShowAnswer,
    isDisabled,
    isSuccess,
    isError,
    word,
    answer,
    handelShowAnswer,
    updateWord,
    setAnswer,
    handelSubmit,
  };
};
