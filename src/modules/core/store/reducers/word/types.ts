import {Word} from '../../../types/word';

export type BaseWord = Omit<Word, 'value' | 'isInGame'> & {
  value: string;
  isInGame: number;
};

export type cardsState = {
  words: Word[];
};

export enum WordActionEnum {
  SET_WORD_LIST = 'SET_WORD_LIST',
  SET_WORD = 'SET_WORD',
  DELETE_WORD = 'DELETE_WORD',
}

export type setWordListAction = {
  type: WordActionEnum.SET_WORD_LIST;
  payload: Word[];
};

export type setWordAction = {
  type: WordActionEnum.SET_WORD;
  payload: Word;
};

export type deleteWordAction = {
  type: WordActionEnum.DELETE_WORD;
  payload: string;
};

export type WordAction = setWordListAction | setWordAction | deleteWordAction;
