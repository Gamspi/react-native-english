import {useTypeSelector} from '../../core/hooks/useTypeSelector';
import {useEffect, useState} from 'react';
import {generationRandom} from '../../core/utils/helpers/generationRandom';
import {Word} from '../../core/types/word';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const useController = () => {
  const {words} = useTypeSelector(state => state.word);
  const navigate = useNavigation<any>();

  const [index, setIndex] = useState(0);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [questionWords, setQuestionWords] = useState<Word[]>([]);
  const [word, setWord] = useState<Word | null>(null);
  const [answer, setAnswer] = useState('');

  const updateWord = () => {
    if (!isShowAnswer && word) {
      setQuestionWords(prev => prev.filter(elem => elem.id !== word.id));
    } else {
      setIndex(generationRandom(questionWords));
    }
    setAnswer('');
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

  useEffect(() => {
    setQuestionWords(words.filter(elem => elem.isInGame));
  }, [words]);

  useEffect(() => {
    if (isGameStart && !questionWords.length) {
      navigate.goBack();
      Alert.alert('YOU WON', 'Well done keep it up');
    } else {
      setIndex(generationRandom(questionWords));
    }
  }, [isGameStart, questionWords]);

  useEffect(() => {
    setWord(questionWords[index]);
  }, [index, questionWords]);

  useEffect(() => {
    setIsGameStart(true);
  }, []);

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
