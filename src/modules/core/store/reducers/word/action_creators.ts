import {WordActionEnum, setWordListAction, setWordAction} from './types';
import {appDispatch} from '../../store';
import {WordBaseData} from '../../../utils/wordBaseData';
import {Word} from '../../../types/word';

const bd = new WordBaseData();
export const WordActionCreators = {
  setWordList: (payload: Word[]): setWordListAction => ({
    type: WordActionEnum.SET_WORD_LIST,
    payload,
  }),

  setWord: (payload: Word): setWordAction => ({
    type: WordActionEnum.SET_WORD,
    payload,
  }),

  initBaseData: () => async (dispatch: appDispatch) => {
    await bd.init();
    await bd.get(result => dispatch(WordActionCreators.setWordList(result)));
  },

  addWord: (word: Omit<Word, 'id'>) => async (dispatch: appDispatch) => {
    await bd.add(word);
    await bd.get(result => dispatch(WordActionCreators.setWordList(result)));
  },

  deleteWord: (id: string) => async (dispatch: appDispatch) => {
    await bd.delete(id);
    await bd.get(result => dispatch(WordActionCreators.setWordList(result)));
  },
  update: () => async (dispatch: appDispatch) => {
    await bd.get(result => dispatch(WordActionCreators.setWordList(result)));
  },
  updateWord: (id, label, value, type) => async (dispatch: appDispatch) => {
    await bd.upDate(id, label, value, type);
    await bd.get(result => dispatch(WordActionCreators.setWordList(result)));
  },
};
