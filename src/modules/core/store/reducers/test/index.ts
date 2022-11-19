import {cardsState, LoadingActionEnum, CardsAction} from './types';

const initialState: cardsState = {
  isLoading: false,
};

const cardsReducer = (
  state = initialState,
  action: CardsAction,
): cardsState => {
  switch (action.type) {
    case LoadingActionEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
};
export default cardsReducer;
