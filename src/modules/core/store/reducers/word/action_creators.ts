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

  addWord:
    ({value, label}: Omit<Word, 'id'>) =>
    async (dispatch: appDispatch) => {
      await bd.add(label, value);
      await bd.get(result => dispatch(WordActionCreators.setWordList(result)));
    },
};
