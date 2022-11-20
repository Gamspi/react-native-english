import {WordActionEnum, setWordListAction, setWordAction, Word} from './types';
import {appDispatch} from '../../store';
import {WordBaseData} from '../../../utils/wordBaseData';

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
};
