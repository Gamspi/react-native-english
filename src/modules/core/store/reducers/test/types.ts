export interface cardsState {
  isLoading: boolean;
}

export enum LoadingActionEnum {
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export type setIsLoadingAction = {
  type: LoadingActionEnum.SET_IS_LOADING;
  payload: boolean;
};

export type CardsAction = setIsLoadingAction;
