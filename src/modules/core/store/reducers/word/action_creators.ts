import {WordActionEnum, setWordListAction, Word} from './types';

// import {appDispatch} from '../../store';

export const TestActionCreators = {
  setWordList: (payload: Word): setWordListAction => ({
    type: WordActionEnum.SET_WORD_LIST,
    payload,
  }),

  // asyncDispatch: (page: number) => async (dispatch: appDispatch) => {
  //   console.log(page);
  //   dispatch(TestActionCreators.setIsLoading(true));
  // },
};
