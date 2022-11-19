import {TestActionCreators} from './test/action_creators';
import {WordActionCreators} from './word/action_creators';

export const allActionsCreators = {
  ...TestActionCreators,
  ...WordActionCreators,
};
