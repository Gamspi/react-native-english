import {cardsState, WordActionEnum, WordAction} from './types';

const initialState: cardsState = {
  words: [],
};

const cardsReducer = (state = initialState, action: WordAction): cardsState => {
  switch (action.type) {
    case WordActionEnum.SET_WORD_LIST:
      return {...state, words: [...action.payload]};
    default:
      return state;
  }
};
export default cardsReducer;
