export type Word = {
  id: string;
  label: string;
  value: string[];
  type: string;
};

export type BaseWord = Omit<Word, 'value'> & {
  value: string;
};

export type cardsState = {
  words: Word[];
};

export enum WordActionEnum {
  SET_WORD_LIST = 'SET_WORD_LIST',
  SET_WORD = 'SET_WORD',
}

export type setWordListAction = {
  type: WordActionEnum.SET_WORD_LIST;
  payload: Word[];
};
export type setWordAction = {
  type: WordActionEnum.SET_WORD;
  payload: Word;
};

export type WordAction = setWordListAction | setWordAction;
