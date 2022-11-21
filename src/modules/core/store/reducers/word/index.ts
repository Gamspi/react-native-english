import {cardsState, WordActionEnum, WordAction} from './types';

const initialState: cardsState = {
  words: [],
};

const cardsReducer = (state = initialState, action: WordAction): cardsState => {
  switch (action.type) {
    case WordActionEnum.SET_WORD_LIST:
      return {...state, words: [...action.payload]};

    case WordActionEnum.SET_WORD:
      return {
        ...state,
        words: [
          ...state.words.filter(elem => elem.id !== action.payload.id),
          action.payload,
        ],
      };
    case WordActionEnum.DELETE_WORD:
      return {
        ...state,
        words: [...state.words.filter(elem => elem.id !== action.payload)],
      };
    default:
      return state;
  }
};
export default cardsReducer;
