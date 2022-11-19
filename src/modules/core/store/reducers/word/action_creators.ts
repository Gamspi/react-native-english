import {WordActionEnum, setWordListAction, Word} from './types';

// import {appDispatch} from '../../store';

export const WordActionCreators = {
  setWordList: (payload: Word): setWordListAction => ({
    type: WordActionEnum.SET_WORD_LIST,
    payload,
  }),
};
