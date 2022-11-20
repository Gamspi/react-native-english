import {useState, useCallback} from 'react';
import {useTypeSelector} from '../../../core/hooks/useTypeSelector';
import {useAction} from '../../../core/hooks/useActions';

export function useController() {
  const {words} = useTypeSelector(state => state.word);
  const {update} = useAction();
  const [isRefreshingList, setIsRefreshingList] = useState(false);

  const onRefresh = useCallback(async () => {
    setIsRefreshingList(true);
    await update();
    setIsRefreshingList(false);
  }, [update]);
  return {
    words,
    isRefreshingList,
    onRefresh,
  };
}
