import {LoadingActionEnum, setIsLoadingAction} from './types';

import {appDispatch} from '../../store';

export const TestActionCreators = {
  setIsLoading: (isLoading: boolean): setIsLoadingAction => ({
    type: LoadingActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),

  asyncDispatch: (page: number) => async (dispatch: appDispatch) => {
    console.log(page);
    dispatch(TestActionCreators.setIsLoading(true));
  },
};
