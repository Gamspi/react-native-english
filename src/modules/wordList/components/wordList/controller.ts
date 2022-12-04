import React, {useState, useCallback, useEffect} from 'react';
import {useAction} from '../../../core/hooks/useActions';
type Attr = {
  setIsShow: React.Dispatch<boolean>;
};
export function useController({setIsShow}: Attr) {
  const {update} = useAction();
  const [isRefreshingList, setIsRefreshingList] = useState(false);
  const [lastOffsetY, setLastOffsetY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const onRefresh = useCallback(async () => {
    setIsRefreshingList(true);
    await update();
    setIsRefreshingList(false);
  }, [update]);

  const handelScroll = useCallback(
    e => {
      setOffsetY(e.nativeEvent.contentOffset.y);
      setLastOffsetY(offsetY);
    },
    [offsetY],
  );

  useEffect(() => {
    console.log(offsetY);
    setIsShow(offsetY < 50 || offsetY - lastOffsetY < 0);
  }, [lastOffsetY, offsetY, setIsShow]);
  return {
    handelScroll,
    isRefreshingList,
    onRefresh,
  };
}
