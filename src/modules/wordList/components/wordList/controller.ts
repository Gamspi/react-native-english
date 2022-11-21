import {useState, useCallback} from 'react';
import {useAction} from '../../../core/hooks/useActions';

export function useController() {
  const {update} = useAction();
  const [isRefreshingList, setIsRefreshingList] = useState(false);

  const onRefresh = useCallback(async () => {
    setIsRefreshingList(true);
    await update();
    setIsRefreshingList(false);
  }, [update]);
  return {
    isRefreshingList,
    onRefresh,
  };
}
