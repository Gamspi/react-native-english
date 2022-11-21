import {
  WordActionEnum,
  setWordListAction,
  setWordAction,
  deleteWordAction,
} from './types';
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

  removeWord: (id: string): deleteWordAction => ({
    type: WordActionEnum.DELETE_WORD,
    payload: id,
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
    try {
      await bd.delete(id);
      dispatch(WordActionCreators.removeWord(id));
    } catch (e) {
      console.log(e);
    }
  },

  update: () => async (dispatch: appDispatch) => {
    await bd.get(result => dispatch(WordActionCreators.setWordList(result)));
  },

  updateWord: (word: Word) => async (dispatch: appDispatch) => {
    try {
      await bd.upDate(word);
      dispatch(WordActionCreators.setWord(word));
    } catch (e) {
      console.log(e);
    }
  },
};
