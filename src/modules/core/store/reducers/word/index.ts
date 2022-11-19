import {cardsState, WordActionEnum, CardsAction} from './types';

const initialState: cardsState = {
  words: [
    {
      id: '1',
      label: 'lABEL',
      value: 'value',
    },
    {
      id: '2',
      label: 'lABEL',
      value: 'value',
    },
    {
      id: '3',
      label: 'lABEL',
      value: 'value',
    },
  ],
};

const cardsReducer = (
  state = initialState,
  action: CardsAction,
): cardsState => {
  switch (action.type) {
    case WordActionEnum.SET_WORD_LIST:
      return {...state, words: [...state.words]};
    default:
      return state;
  }
};
export default cardsReducer;
