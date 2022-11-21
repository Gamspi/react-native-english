import {wordsState, WordActionEnum, WordAction} from './types';

const initialState: wordsState = {
  words: [],
};

const wordsReducer = (state = initialState, action: WordAction): wordsState => {
  switch (action.type) {
    case WordActionEnum.SET_WORD_LIST:
      return {...state, words: [...action.payload]};

    case WordActionEnum.SET_WORD:
      return {
        ...state,
        words: [
          ...state.words.map(elem =>
            elem.id === action.payload.id ? action.payload : elem,
          ),
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
export default wordsReducer;
