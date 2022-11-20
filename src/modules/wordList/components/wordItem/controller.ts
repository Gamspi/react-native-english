import {useAction} from '../../../core/hooks/useActions';

export function useController() {
  const {deleteWord} = useAction();
  const handelDeleteWord = id => deleteWord(id);
  return {
    handelDeleteWord,
  };
}
