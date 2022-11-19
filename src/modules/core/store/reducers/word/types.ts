export type Word = {
  id: string;
  label: string;
  value: string;
};

export type cardsState = {
  words: Word[];
};

export enum WordActionEnum {
  SET_WORD_LIST = 'SET_WORD_LIST',
}

export type setWordListAction = {
  type: WordActionEnum.SET_WORD_LIST;
  payload: Word;
};

export type CardsAction = setWordListAction;
